import Bus from "./../models/Bus.js";

const postApiBuses = async (req, res) => {
    try {
        const { busNumber, capacity, busType } = req.body;

        const buses = new Bus({
            busNumber,
            capacity,
            busType
        })
        const savedBuses = await buses.save();
        return res.json({
            success: true,
            data: savedBuses,
            message: "buses save successfully !"
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}

const getApiBuses = async (req, res) => {
    const findBuses = await Bus.find();
    res.json({
        success: true,
        data: findBuses,
        message: "fetch all buses successfully !"
    })
}

//put api- /api/buses/:id
const putApiBuses = async (req, res) => {
    const { id } = req.params;
    try {
        const { busNumber, capacity, busType } = req.body;

        await Bus.updateOne(
            { _id: id },
            {
                $set: {
                    busNumber,
                    capacity,
                    busType,
                },
            }
        );

        const updateBus = await Bus.findOne({ _id: id });
        res.json({
            success: true,
            message: "Update Successfully",
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Not Updated",
        });
    }
};

//   patch api - api/buses/id
const patchApiBuses = async (req, res) => {
    const { id } = req.params;

    const { capacity } = req.body;

    await Bus.updateOne({ _id: id },
        {
            $set: {
                capacity,
            }
        }

    );
    res.json({
        success:true,
        message:"Update capacity successfully"
    })
}



export { postApiBuses, getApiBuses, putApiBuses, patchApiBuses };



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