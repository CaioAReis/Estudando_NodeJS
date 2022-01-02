const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    
    age: {
        type: Number,
        require: true
    },

    productsList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model('User', userSchema);