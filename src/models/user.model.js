import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"],
        lowercase:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    doctor:[
        {
            type:Schema.Types.ObjectId,
            ref:"Doctor"
        }
    ],
    hospital:[
        {
            type:Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ],
    disease:[
        {
            type:String,
            required:true
        }
    ]
    
},{timestamps:true})

export const User = mongoose.model("User",userSchema)

