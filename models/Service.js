const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, 
{ timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};