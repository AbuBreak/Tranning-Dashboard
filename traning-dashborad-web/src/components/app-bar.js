import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, Toolbar, IconButton, Badge, Typography } from '@mui/material';

/**
 * Default App Bar for the application.
 * It includes the CourseEase logo, Mail, and Notifications icons.
 */

const CustomAppBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    CourseEase
                </Typography>
                <Box sx={{ flexGrow: 1 }} />

                {/* Mail, used as a bridge between Trainer and Trainee  */}
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>

                {/* Notifications, notifies if there is any required action needed from one of the stackholder */}
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}

export default CustomAppBar;