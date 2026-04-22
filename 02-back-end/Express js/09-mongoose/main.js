import mongoose from "mongoose";
import express from "express";
import {Todo} from "./Models/Todo.js"   // {} is used beacause its a name import

let a = await mongoose.connect("mongodb://localhost:27017/")
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({title:"Water tank", task:"Research, buy req, implement, show result", iscompleted:"false"})
  // const todo = new Todo({title:"Water tank", task:"Research, buy req, implement, show result", iscompleted:"false", days:"HArrt"})
  todo.save()                 // saved in db, 
  res.send('Hello World!')
})


app.get('/a', async(req, res) => {        //use in url
  // const todo = new Todo({title:"Water tank", task:"Research, buy req, implement, show result", iscompleted:"false"})
let todo = await Todo.findOne({})
console.log(todo);
res.json({title:todo.title, task: todo.task})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
