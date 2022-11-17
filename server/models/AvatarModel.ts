import mongoose from "mongoose";

const avatarPartsSchema = new mongoose.Schema({
    categoryName: String,
    parts: [String]
})

const avatarSchema = new mongoose.Schema({
    uuid: String,
    avatar: [avatarPartsSchema],
})


const Avatar = mongoose.model("Avatar", avatarSchema);

export default Avatar;


// {
//     "parts":{
//         "body":[
//             "./body.png"
//         ],
//         "mouth": [
//             "./mouth1.png",
//             "./mouth2.png"
//         ],
//         "eyes":[
//             "./eyes1.png",
//             "./eyes2.png"
//         ]
//     }
// }