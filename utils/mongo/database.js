const mongoose=require('mongoose')
const dotenv =require ('dotenv')
dotenv.config()

const connect=async()=>{
    await mongoose.connect(process.env.mongo_atlas)
}

module.exports={connect}