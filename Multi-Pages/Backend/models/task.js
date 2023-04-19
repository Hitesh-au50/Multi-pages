import mongoose from "mongoose";

const companyTaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        Description: {
            type: String,
        },
        about: {
            type: Number,
        },
        price: {
            type: Number,
        },
        noOfGuest: {
            type: Number
        },
        Rprice: {
            type: Number
        },
        minHourReservation: {
            type: Number
        },
        maxHourReservation: {
            type: Number
        },
        appoinment: {
            type: Number, String
        },
        tBappoinment: {
            type: Number, String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    },
);

export default mongoose.model("task", companyTaskSchema);
