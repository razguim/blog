import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentSchema = new Schema({
  created: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const ArticleSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  created: {
    type: String,
    require: true,
  },
  updated: {
    type: String,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  comments:[CommentSchema]
});


const Article = mongoose.model("Article", ArticleSchema);
export default Article

