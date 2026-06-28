import mongoose,{Schema,models} from "mongoose";

const ModuleSchema = new Schema({
    tiitle: {
        type: String,
        required: true,
        trim: true ,
    },

   decription: {
        type: String,
        required: true,
   },
   order: {
     type: Number,
     required:true,
   },
  rewardXp:{
   type: Number,
   default : 500,
  },
  rewardHoney: {
    type: Number,
    default: 100,
  },
     isLocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
    
  );

  const Module = models.Module || mongoose.model("Module", ModuleSchema);

export default Module;