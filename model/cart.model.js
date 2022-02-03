import mongoose from 'mongoose'

const Cart = new mongoose.Schema({
    //order, email, date, items array, shippingAdress

    date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: false
    },
    items: {
        type: Array,
        required: false
    },
    shippingAddress: {
        type: String,
        required: false
    }
})


export default mongoose.model('Cart', Cart)