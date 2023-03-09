const nodemailer = require('nodemailer')

// send email function 

const sendEmail = (email, token, route, mailGoal) => {
    // set up the email transporter
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE_TRANSPORTER,
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD
        }, 
        tls: {
            rejectUnauthorized: false
        } 
    })
    // send verification email
    const mailContent = {
        from: mailGoal + process.env.EMAIL,
        to: email,
        subject: mailGoal,
        html: `<p>Hi ${mailGoal} <a href="http://localhost:3000/${route}/${token}">here</a></h2>`
    }
    transporter.sendMail(mailContent, (err) =>  err && console.log(err))
}

module.exports = sendEmail