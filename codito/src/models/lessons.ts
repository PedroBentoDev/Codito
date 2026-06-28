import { timeStamp } from "console";
import mongoose, { Schema, models } from "mongoose";

const LessonSchema = new Schema({

    moduleId:{
        type: Schema.Types.ObjectId,
        ref: "Module",
        required: true,
    },

    tittle:{
       type:String,
       required: true,
       trim:true,

    }
    ,
    description:{
        type: String,
        required: true,
    }
    ,
    order:{
        type: Number,
        required: true,
    },
    rewardXp:{
        type:Number,
        default:10,
    },
    rewardHoney:{
        type: Number,
        default:10,
    },
},
 {
    timestamps: true,
  }
);

const Lesson  = models.Lesson || mongoose.model("Lesson", LessonSchema);