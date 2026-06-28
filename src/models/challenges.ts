import mongoose, {Schema,models} from "mongoose";

const challengeSchema = new Schema(
    {
         lessonId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: true,
    },

    type:{
       type: String,
       enum: ["DIGITAR", "COMPLETAR", "CORRIGIR_BUG"],
      required: true,

    },
      question: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      default: "",
    },

    answer: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Challenge = models.Challenge || mongoose.model("Challenge", challengeSchema);

export default Challenge;