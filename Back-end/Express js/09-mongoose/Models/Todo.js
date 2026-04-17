import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String, 
  task: String, 
  iscompleted: Boolean,
  days:Number
});

export const  Todo = mongoose.model('Todo', TodoSchema);