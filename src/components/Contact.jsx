/** @format */

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

const Contact = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        onClose(); // Close the dialog after submission
    };

    return (
        <Dialog open={true} onClose={onClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Contact Form</DialogTitle>
            <DialogContent>
                <TextField
                    margin='dense'
                    id='username'
                    label='Username'
                    type='text'
                    name='username'
                    fullWidth
                    value={formData.username}
                    onChange={handleChange}
                />
                <TextField
                    margin='dense'
                    id='phoneNumber'
                    label='Phone Number'
                    type='text'
                    name='phoneNumber'
                    fullWidth
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <TextField
                    margin='dense'
                    id='email'
                    label='Email'
                    type='email'
                    name='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    margin='dense'
                    id='message'
                    label='Message'
                    type='text'
                    name='message'
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary'>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color='primary'>
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Contact;
