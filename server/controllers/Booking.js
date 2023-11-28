import { application } from 'express';
import Booking from './../models/Booking.js'

const postApiBooking = async (req, res) => {

    const { bus, seatno, contactno, to, from, isconfirm } = req.body;

    const booking = new Booking({
        bus,
        seatno,
        contactno,
        to,
        from,
        isconfirm
    })
    const savedata = await booking.save();
    res.json({
        success: true,
        data: savedata,
        message: "save booking successfully"
    })
}

const getApiBokings =async (req ,res) => {
    const findbookings = await Booking.find();
    res.json({
        success:true,
        data:findbookings,
        message:"get all bookings successfully"
    })
}
 const getApiByIdBookings = async (req,res) =>{
    const {id} = req.params;

    const getdata = await Booking.findOne({_id:id});
    res.json({
        success:true,
        data:getdata,
        messgae:"get bookings successfully by their id"
    })
 }

 const putApiBookings = async (req,res) => {
        const {id} =req.params;
    try{
        const {bus, seatno, contactno, to, from, isconfirm} = req.body;

    await Booking.updateOne({_id:id},{$set:{
        bus,
        seatno,
        contactno,
        to,
        from,
        isconfirm
    }});
    res.json({
        success:true,
        message:"update bookings successfully"   
    })
    }
    catch(err){
    res.json({
       success:false,
       messgae:err.message 
    })
    }
    


    
 }

 const patchApiBookings = async(req,res) => {
    const {id} = req.params;

    try{
        const {seatno} = req.body;
         await Booking.updateOne({_id:id},{$set:{seatno}});
        res.json({
            success:true,
            message:"seatno update successfully"
        })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message

        })
    }
 }

 const deletApiBookings = async(req,res) => {
    const {id} = req.params;
    try{
        const deleteData = await Booking.deleteOne({_id:id});
        res.json({
            success:true,
            data:deleteData,
            message:"delete data successfully"
        })
    }
    catch{
        res.json(err)({
            success:false,
            message:err.message
        })
    }
 }


export {postApiBooking ,getApiBokings , getApiByIdBookings,putApiBookings,patchApiBookings,deletApiBookings};