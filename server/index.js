import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); 

import {postApiBuses,getApiBuses,putApiBuses,patchApiBuses,getApiByIdBuses,deleteApiBuses} from "./controllers/Bus.js";

import{postApiBooking ,getApiBokings,getApiByIdBookings,putApiBookings,patchApiBookings,deletApiBookings} from "./controllers/Booking.js";

const app = express();
app.use(express.json());

// MongoDB Connection

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if (conn) {
        console.log(`MongoDB connected successfully !`);
    }
};
connectDB();
// POST/api/buses

// healths Api
app.get('/api/healths', async(req,res)=>{

    res.json({
        success:true,
        message:"server is live"
    })
})
// bus Api
app.post('/api/v1/buses',postApiBuses)

app.get('/api/v1/buses',getApiBuses)

app.get('/api/v1/buses/:id',getApiByIdBuses)

app.put('/api/v1/buses/:id',putApiBuses)

app.patch('/api/v1/buses/:id',patchApiBuses)

app.delete('/api/v1/buses/:id',deleteApiBuses)


// Booking Api

app.post('/api/v1/bookings',postApiBooking)

app.get('/api/v1/bookings',getApiBokings)

app.get('/api/v1/bookings/:id' ,getApiByIdBookings)

app.put('/api/v1/bookings/:id',putApiBookings)

app.patch('/api/v1/bookings/:id',patchApiBookings)

app.delete('/api/v1/bookings/:id',deletApiBookings)


// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

}
)


