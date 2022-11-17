import mongoose from "mongoose";


interface IAvatar {
    _id: string;
    uuid: string;
    layers: [
        {categoryName: string,parts: string[]}
    ]
}

const avatarLayersSchema = new mongoose.Schema({
    categoryName: String,
    parts: [String]
})

const avatarSchema = new mongoose.Schema({
    uuid: String,
    layers: [avatarLayersSchema],
})


const Avatar = mongoose.model<IAvatar & mongoose.Document>("Avatar", avatarSchema);

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