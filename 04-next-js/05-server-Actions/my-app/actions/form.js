"use server"
import fs from "fs/promises"

export const submitAction = async (e)=>{
    fs.writeFile("User-Data.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)

  }