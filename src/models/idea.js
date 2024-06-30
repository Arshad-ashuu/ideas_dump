import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const PostSchema = new Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    idea: {
      type: String,
      required: [true, "Idea is required"],
    },
    tag: {
      type: String,
      required: [true, "Tag is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Idea = models.Idea || model("Idea", PostSchema);

export default Idea;
