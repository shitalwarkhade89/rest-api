import mongoose, { Schema ,model } from "mongoose";

const bookingSchema = new Schema ({
    bus:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Bus",
        required:true
    },
   
    seatno:{
        type:String,
        required:true
    },
    contactno:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    isconfirm:{
        type:Boolean,
        required:true
    },
   
},
{timestamps:true});

// model 

const Booking = model ("Booking",bookingSchema);

export default Booking