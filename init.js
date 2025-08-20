const mongoose = require('mongoose');

const Chat=require("./models/chat.js")

main().then(() => { console.log("connection successful"); })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allchats=[
    {
        from:"Arushi",
        to:"Adi",
        msg:"anonymous",
        created_at:new Date()
    },
    {
        from:"Arushi",
        to:"akku",
        msg:"??",
        created_at:new Date()
    },
    {
        from:"Akku",
        to:"Neha",
        msg:"Msg me .!",
        created_at:new Date()
    },
    {
        from:"Rohit",
        to:"Mohit",
        msg:"where?",
        created_at:new Date()
    }

];

 Chat.insertMany(allchats);
