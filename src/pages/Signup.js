import React, { useState } from 'react'
import "./signup.css"
import axios from "axios"

function Signup() {

 function handleSubmit(e){
  e.preventDefault()

  const form = new FormData(e.currentTarget)

  axios.post("http://localhost:8000/account/signup/", form)
  .then((res) => {
    if(res.data.message === "signup successful"){
      alert("Account created")
    }else{
     Object.entries(res.data.info).map((err) => {
      alert(err)
     })
    }
  })
  .catch((err) => console.log(err))


 }

  return (
  <div className="container signup">

    
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row align-items-center">

        <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">FirstName</label>
          <input type="text" name="first_name"  className="form-control" />
        </div>


        <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">LastName</label>
          <input type="text" name="last_name"   className="form-control" />
        </div>

        <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">Email</label>
          <input type="email" name="email" className="form-control"  />
        </div>

        <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="password" className="form-control"  />
        </div>

        <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">Photo</label>
          <input type="file" name="photo" className="form-control" />
        </div>

        <div className="col-md-6 col-12">
         {/* <button type='button' onClick={() => setNum(num + 1)} className="btn btn-success">Signup</button> */}
         <button type='submit' className="btn btn-success">Signup</button>
        </div>

      </div>
    </form>
  </div>
  )
}

export default Signup