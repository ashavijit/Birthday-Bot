const User = require('../models/user.model');
const { sendEmail } = require('./notification.service');


module.exports = {
    cronService: async () => {
        try {

            const todayDate = `${new Date().getDate() + 1}/${new Date().getMonth() + 1}`;
            
            const friend = await User.find({ dob: todayDate });
            if (friend.length !== 0) {
                for (const iterator of friend) {
                    
                    await sendEmail(iterator.name);
                }
            } else {
                await sendEmail('Test User');
                console.info("No birthday for today.", todayDate);
            }
        } catch (error) {
            console.error('cron-service.js', error);
        }
    },
};

