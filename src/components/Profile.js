/** @format */

import React from "react";
import user from "../data/user.json";
import profileImg from "../images/profile.jpg";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../css/Profile.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Profile = () => {
    return (
        <div className="user-info">
            <div className="user-card">
                <div className="user-left">
                    <img src={profileImg} alt={user.name} className="user-image" />
                    <div className="user-bottom">
                        <button className="contact-button">Contact</button>
                    </div>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <Item>
                                <div className="user-details">
                                    <h2 className="user-name">{user.name}</h2>
                                    <p className="user-role">{user.role}</p>
                                    <p className="user-id">{user.nmls}</p>
                                    <div className="mainGrid">
                                        <h1 className="title">About:</h1>
                                        <h2 className="subTitle">{user.about}</h2>
                                    </div>
                                </div>
                                <div className="mainGrid">
                                    <h1 className="title">Language:</h1>
                                    <h2 className="subTitle">{user.language}</h2>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>
                                <div className="mainGrid">
                                    <h1 className="title">Service Area:</h1>
                                    <h2 className="subTitle">{user.serviceArea}</h2>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>
                                <div className="mainGrid">
                                    <h1 className="title">Phone:</h1>
                                    <h2 className="subTitle">{user.phone}</h2>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>
                                <div className="mainGrid">
                                    <h1 className="title">Email:</h1>
                                    <h2 className="subTitle">{user.email}</h2>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Profile;
