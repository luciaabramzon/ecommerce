require('dotenv').config()
const MY_EMAIL_ADDRESS=process.env.MY_EMAIL_ADDRESS
const GMAIL_PASSWORD=process.env.GMAIL_PASSWORD

const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:MY_EMAIL_ADDRESS,
        pass:GMAIL_PASSWORD
    },
    secureConnection:'false',
    tls:{
        ciphers:'SSLv3',
        rejectUnauthorized:false
    }
})


module.exports=transporter