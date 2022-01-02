const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

    price: {
        type: Number,
        require: true
    },

    quantity: {
        type: Number,
        require: true
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

module.exports = mongoose.model("Product", productSchema);