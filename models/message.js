
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    message: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});


const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;