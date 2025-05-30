import mongoose, { Schema, model } from "mongoose";

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

const Articles = mongoose.models?.Articles || model("Articles", ArticleSchema);
export default Articles;
