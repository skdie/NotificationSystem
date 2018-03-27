var mongoose = require('mongoose');

var Contact = mongoose.model('Contact',{
    name: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: Number,
        default: null,
        trim: true
    }
});

module.exports = {
    Contact
}