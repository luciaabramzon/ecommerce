const twilio = require('twilio')
require('dotenv').config()
const sid=process.env.sid
const token=process.env.token
const client=twilio(sid,token)


module.exports=client
