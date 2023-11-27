import Bus from "./../models/Bus.js";

const postApiBuses = async (req,res) => {
    try{
    const{ busnumber, capacity,bustype} = req.body;

    const buses = new Bus({
        busnumber,
        capacity,
        bustype
    })
        const savedBuses = await buses.save();
        return res.json({
        success:true,
        data:savedBuses,
        message:"buses save successfully !"
    });
    }
    catch(err){
        res.json({
        success:false,
        message:err.message
        })
    }
}



export {postApiBuses};



// const postApiBuses=async (req, res) => {
//     const {busnumber,capacity, bustype} = req.body;
// async (req, res) => {
//     const { capacity, busnumber, bustype} = req.body;

//     const buses = new Bus({
//         busnumber: busnumber,
//         capacity: capacity,
//         bustype: bustype,

//     });
//     try{
//         const savedBuses = await buses.save();
//         res.json({
//             success: true,
//             data: savedBuses,
//             message: "save busses successfully"
//         })
//     }
//     catch (err) {
//         res.json({
//             success: false,
//             message: "busses not save"
//         })
//     }
// }
//     const buses = new Bus({
//         busnumber: busnumber,
//         capacity: capacity,
//         bustype: bustype,

//     });
//     try{
//         const savedBuses = await buses.save();
//         res.json({
//             success: true,
//             data: savedBuses,
//             message: "save busses successfully"
//         })
//     }
//     catch (err) {
//         res.json({
//             success: false,
//             message: "busses not save"
//         })
//     }
// }

// export {postApiBuses}