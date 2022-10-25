import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      min: 3,
      max: 500,
      required: true,
    },
    updateAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
