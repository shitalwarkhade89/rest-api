import { Schema ,model } from "mongoose";

const busSchema = new Schema({
    busnumber:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    bustype:{
        type:String,
        enum:['AC','NonAC'],
        default:'NonAC',
        required:true
    }  
},{timestamps:true});

// model for bus

const Bus = model('Bus', busSchema);

export default Bus
