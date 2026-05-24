import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
    <div className="container">

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' type="text" {...register("username", {required:"true", minLength:6, maxLength:8})} />
        <br />
        <input placeholder='password' type="password" {...register("password", {required:"true", minLength:6, maxLength:16})}/>
        <br />
        <input type="submit" value="Submit" /> 
      </form>
    </div>
    </>
  )
}

export default App
