import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";
import Typography from '@mui/material/Typography'; 

const Contact=()=> {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}>Message Dialog</Button>
            <Dialog open={open} size="xs" handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        {" "}
                        <Typography className="mb-1" variant="h4">
                            New message to @{" "}
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody>
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Username
                        </Typography>
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Phone Number
                        </Typography>
                        <Typography className="-mb-1" color="blue-gray" variant="h6">
                            Email
                        </Typography>
                    <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                        Message
                    </Typography>
                    <div className="grid gap-6">
                        <Input label="Username" />
                        <Textarea label="Message" />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 bg-yellow-300">
                    <Button variant="gradient" color="gray" onClick={handleOpen}>
                        Contact
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default Contact;