const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    number_plate: {
        type: String
    },
    color_vehicle: {
        type: String
    },
    time_of_arrival: {
        type: String
    },
    phone_number: {
        type: String
    },
    model: {
        type: String
    },
    date: {
        type: Date
    },
    nin: {
        type: String
    },
    duration: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
}
)


const Registration = mongoose.Model('Registration', registrationSchema)

module.exports = Registration;
