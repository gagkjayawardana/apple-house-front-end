import React from 'react';
import '../../utils/navigationBar/navigationBar.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction, selectUser } from '../../redux/user/userSlice';

function NavigationBar() {
    const dispsatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const navigateToHome = () => {
        navigate('/home');
    };
    const navigatetoUser = () => {
        if (user) {
            const userName = user.userName;
            navigate(`/user/${userName}`);
        }
    };
    const navigateToAdmin = () => {
        navigate('/admin');
    };
    const logoutFunction = () => {
        dispsatch(logoutUserAction({ navigate }));
    };
    return (
        <div className="navigation_bar">
            <Typography sx={{ color: '#ffffff' }} variant="h3" gutterBottom>
                Apple House
            </Typography>
            <div className="navigation_content">
                <div className="navigation_buttons">
                    <Button
                        sx={{
                            color: '#ffffff',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        onClick={navigateToHome}
                        variant="text"
                    >
                        Home
                    </Button>
                    {user.role === 'user' && (
                        <Button
                            sx={{
                                color: '#ffffff',
                                marginLeft: '20px',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#66ffff' },
                            }}
                            onClick={navigatetoUser}
                            variant="text"
                        >
                            User
                        </Button>
                    )}
                    {user.role === 'admin' && (
                        <Button
                            sx={{
                                color: '#ffffff',
                                marginLeft: '20px',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#66ffff' },
                            }}
                            onClick={navigateToAdmin}
                            variant="text"
                        >
                            Admin
                        </Button>
                    )}
                </div>
                <Button
                    sx={{
                        backgroundColor: '#000099',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#66ffff' },
                    }}
                    onClick={logoutFunction}
                    variant="contained"
                >
                    Sign Out
                </Button>
            </div>
        </div>
    );
}

export default NavigationBar;
