const mongoose=require('mongoose');

const ChatShcema =new mongoose.Schema({
    message: {type: String}},
    { timestamps: true });

    module.exports = mongoose.model('Chat', ChatShcema);
