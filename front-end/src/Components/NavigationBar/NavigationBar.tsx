import React from 'react';
import '../../utils/navigationBar/navigationBar.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavigationBar() {
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
                        variant="text"
                    >
                        Home
                    </Button>
                    <Button
                        sx={{
                            color: '#ffffff',
                            marginLeft: '20px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        variant="text"
                    >
                        User
                    </Button>
                    <Button
                        sx={{
                            color: '#ffffff',
                            marginLeft: '20px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        variant="text"
                    >
                        Admin
                    </Button>
                </div>
                <Button
                    sx={{
                        backgroundColor: '#000099',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#66ffff' },
                    }}
                    variant="contained"
                >
                    Sign Out
                </Button>
            </div>
        </div>
    );
}

export default NavigationBar;
