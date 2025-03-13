import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, Toolbar, IconButton, Badge, Typography } from '@mui/material';

/**
 * Default App Bar for the application.
 * It includes the CourseEase logo, Mail, and Notifications icons.
 */

const CustomAppBar = ({ data }) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {data.title}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />

                {/* Mail, used as a bridge between Trainer and Trainee  */}
                {data.mail && <IconButton size="large" color="inherit">
                    <Badge badgeContent={data.mailCount} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>}

                {/* Notifications, notifies if there is any required action needed from one of the stackholder */}
                {data.notifications && <IconButton size="large" color="inherit">
                    <Badge badgeContent= {data.notificationCount} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>}
            </Toolbar>
        </AppBar>

    );
}

CustomAppBar.defaultProps = {
    data: {
        title: 'CourseEase',
        mail: true,
        notifications: true,
        mailCount: 0,
        notificationCount: 0
    }
}

export default CustomAppBar;