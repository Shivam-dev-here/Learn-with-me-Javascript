import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'


function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

const delay = (d) =>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve()
    }, d * 1000);
  })
}

  const onSubmit = async (data) =>{
    await delay(2)
    console.log(data);
  } 


  return (


    // Submission Problem: Error


    // <>
    //   <div className="container">

    //     <form action="" onSubmit={handleSubmit(onSubmit)}>
    //       <input placeholder='username' type="text" {...register("username", { required:{value:true, message:"Required"}, minLength: {value:5, message: "minimum length is 5"}, maxLength: {value:8, message: "maximum length is 8"}})} />
    //       {errors.username && <div>{errors.username.message}</div>}
    //       <br />
    //       <input placeholder='password' type="password" {...register("password", { required: "true", minLength: 6, maxLength: 16 })} />
    //       <br />
    //       <input type="submit" value="Submit" />
    //     </form>
    //   </div>
    // </>



    // Submission Problem: Error


    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' type="text" {...register("username", { required: { value: true, message: "Required" }, minLength: { value: 5, message: "minimum length is 5" }, maxLength: { value: 8, message: "maximum length is 8" } })} />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' type="password" {...register("password", { required: "true", minLength: 6, maxLength: 16 })} />
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
