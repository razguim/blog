import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
});
const Category = mongoose.model("Category", CategorySchema);
export default Category
