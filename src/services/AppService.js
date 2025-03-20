//getAppBarData API.

export const fetchMailAndNotifications = async () => {
    try {
        // Replace with actual API endpoints
        const mailResponse = await fetch('http://localhost:3001/mails');
        const notificationResponse = await fetch('http://localhost:3001/notifications');

        const mails = await mailResponse.json();
        const notifications = await notificationResponse.json();

        return {
            mails: { count: mails.count, enabled: mails.enabled },
            notifications: { count: notifications.count, enabled: notifications.enabled },
        };
    } catch (error) {
        console.error('Error fetching mail and notifications:', error);
        return {
            mails: { count: 0, enabled: false },
            notifications: { count: 0, enabled: false },
        };
    }
};