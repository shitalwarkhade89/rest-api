import { Schema ,model } from "mongoose";

const busSchema = new Schema({
    busNumber:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    busType:{
        type:String,
        enum:['AC','NonAC'],
        default:'NonAC',
        required:true
    }  
},{timestamps:true});

// model for bus

const Bus = model('Bus', busSchema);

export default Bus
