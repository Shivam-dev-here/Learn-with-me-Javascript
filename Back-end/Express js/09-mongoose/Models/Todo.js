import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  newtitle: {type: String, required =true, default:"Don't miss"},
  title: String, 
  task: String, 
  isDone: Boolean,
  days:Number
});

export const  Todo = mongoose.model('Todo', TodoSchema);