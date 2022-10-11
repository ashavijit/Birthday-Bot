const nodeMailer = require('nodemailer');
const Quote= require ('inspirational-quotes');

module.exports = {
    sendEmail: async (name) => {
        try {
            const randomQuote = Quote.getRandomQuote();
            const subject = name === 'Test User' ? 'No Birthday for Today' : `Birthday Reminder: ${name}`;
            const body = name === 'Test User' ? `${randomQuote}` : `Hello Alok, <br /> Send your wishes to <b>${name}</b>. <br /> <br /> -- Your well wisher ♥`;
            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'process.env.EMAIL',
                    pass: 'process.env.PASSWORD'
                },
                
                });
                await transporter.sendMail({
                    from: "localhost.port.8080@gmail.com",
                    to: "avijitsen.me@gmail.com",
                    subject: subject,
                    html: body
            });
            console.log('Email sent successfully');
        } catch (error) {
            console.log(error);
        }
    },
};