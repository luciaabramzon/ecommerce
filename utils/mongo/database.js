const mongoose=require('mongoose')

const connect=async()=>{
    await mongoose.connect("mongodb+srv://lucianew:Backend2022@cluster0.taani6r.mongodb.net/test")
}

module.exports={connect}