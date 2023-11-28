import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); 
import {postApiBuses,getApiBuses,putApiBuses,patchApiBuses} from "./controllers/Bus.js"

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


app.get('/api/healths', async(req,res)=>{

    res.json({
        success:true,
        message:"server is live"
    })
})

app.post('/api/v1/buses',postApiBuses)

app.get('/api/v1/buses',getApiBuses)

app.put('/api/v1/buses/:id',putApiBuses)
app.patch('/api/v1/buses/:id',patchApiBuses)


// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

}
)


