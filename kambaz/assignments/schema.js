import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    description: String,
    availableDate: String,
    dueDate: String,
    points: Number,
  },
  { collection: "assignments" }
);
export default schema;
