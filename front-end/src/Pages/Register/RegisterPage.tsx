import React from 'react';
import '../../utils/register/registerPage.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RegisterType } from './registerInterFaces';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/')
    }
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const validationSchema = yup.object().shape({
        userName: yup.string().required('Required'),
        email: yup.string().email('Please Enter Valid Email').required('Required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Required'),
    });
    const handleSubmit = (e: RegisterType) => {
        const userName = e.userName;
        const email = e.email;
        const password = e.password;
        const confirmPassword = e.confirmPassword;

        if (password === confirmPassword) {
            console.log('Name', userName, 'Email', email);
        }
    };
    return (
        <div className="register_page">
            <Typography sx={{ color: '#ffffff' }} variant="h3" gutterBottom>
                Apple House
            </Typography>
            <div className="register_form">
                <Typography sx={{ color: '#000099' }} variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <div className="register_container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field
                                as={TextField}
                                name="userName"
                                label="Name"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="userName"
                                        render={(msg) => <span id="register_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                                size="small"
                            />
                            <Field
                                as={TextField}
                                name="email"
                                sx={{ marginTop: '25px' }}
                                label="Email"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="email"
                                        render={(msg) => <span id="register_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                                size="small"
                            />
                            <Field
                                as={TextField}
                                name="password"
                                sx={{ marginTop: '25px' }}
                                label="Password"
                                type="password"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="password"
                                        render={(msg) => <span id="register_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                                size="small"
                            />
                            <Field
                                as={TextField}
                                name="confirmPassword"
                                sx={{ marginTop: '25px' }}
                                label="Confirm Password"
                                type="password"
                                variant="filled"
                                helperText={
                                    <ErrorMessage
                                        name="confirmPassword"
                                        render={(msg) => <span id="register_error">{msg}</span>}
                                    />
                                }
                                fullWidth
                                size="small"
                            />
                            <Button
                                sx={{ width: '100%', marginTop: '35px', textTransform: 'none' }}
                                type="submit"
                                variant="contained"
                            >
                                Register
                            </Button>
                        </Form>
                    </Formik>
                </div>
                <Button
                    sx={{ marginTop: '20px', textTransform: 'none' }}
                    variant="text"
                    onClick={navigateToLogin}
                >
                    Back
                </Button>
            </div>
        </div>
    );
}

export default RegisterPage;
