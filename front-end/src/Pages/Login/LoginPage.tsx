import React from 'react';
import '../../utils/login/loginPage.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginFormValues } from './loginInterfaces';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/user/userSlice';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToRegister = () => {
        navigate('/register');
    };
    const initialValues = {
        email: '',
        password: '',
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email('Please Enter Valid Email').required('Required'),
        password: yup.string().required('Required'),
    });
    const handleSubmit = (e: LoginFormValues) => {
        const email = e.email;
        const password = e.password;

        if (email && password) {
            dispatch(loginUserAction({ email, password, navigate }))
        }
    };
    return (
        <div className="login_page">
            <Typography sx={{ color: '#ffffff' }} variant="h3" gutterBottom>
                Apple House
            </Typography>
            <div className="login_form">
                <Typography sx={{ color: '#000099' }} variant="h4" gutterBottom>
                    Sign In
                </Typography>
                <div className="login_container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="email"
                                        render={(msg) => <span id="login_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                            />
                            <Field
                                as={TextField}
                                name="password"
                                sx={{ marginTop: '35px' }}
                                label="Password"
                                type="password"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="password"
                                        render={(msg) => <span id="login_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                            />
                            <Button
                                sx={{ width: '100%', marginTop: '50px', textTransform: 'none' }}
                                type="submit"
                                variant="contained"
                            >
                                Log In
                            </Button>
                        </Form>
                    </Formik>
                </div>
                <Button
                    sx={{ marginTop: '20px', textTransform: 'none' }}
                    variant="text"
                    onClick={navigateToRegister}
                >
                    Register
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
