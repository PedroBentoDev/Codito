/* importação do mongoose */
import mongoose,{Schema,models} from "mongoose";

/* Criação do sceham do usuario */
const UserSchema = new Schema ({
    name : {
        type: String,
        required :[ true, "Nome é obrigatório"],
        trim : true
    }
    ,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

     password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "larva-curiosa",
    },

    level: {
      type: Number,
      default: 1,
    },

    xp: {
      type: Number,
      default: 0,
    },

    honey: {
      type: Number,
      default: 0,
    },

    lives: {
      type: Number,
      default: 5,
    },

    streak: {
      type: Number,
      default: 0,
    },

    currentTitle: {
      type: String,
      default: "Pequena Larva",
    },
  },
  {
    timestamps: true,
  }

);
const User = models.User || mongoose.model("User", UserSchema);

export default User;
