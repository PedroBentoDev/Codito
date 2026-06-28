import mongoose, { Schema, models } from "mongoose";

const ProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    lessonId: {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    stars: {
      type: Number,
      default: 0,
      min: 0,
      max: 3,
    },

    errors: {
      type: Number,
      default: 0,
    },

    xpEarned: {
      type: Number,
      default: 0,
    },

    honeyEarned: {
      type: Number,
      default: 0,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Progress = models.Progress || mongoose.model("Progress", ProgressSchema);

export default Progress;