import React, { useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import useAppZusStore from '../../../store/AppZus';
import { fetchMailAndNotifications } from '../../../services/AppService';

const CustomAppBar = () => {
    const { mails, notifications, setMails, setNotifications } = useAppZusStore();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMailAndNotifications();
            setMails(data.mails.count, data.mails.enabled);
            setNotifications(data.notifications.count, data.notifications.enabled);
        };

        fetchData();
    }, [setMails, setNotifications]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    CourseEase
                </Typography>
                <Box sx={{ flexGrow: 1 }} />

                {mails.enabled && (
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={mails.count} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                )}
                {notifications.enabled && (
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={notifications.count} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;