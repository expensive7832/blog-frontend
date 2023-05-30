import React from 'react'
import axios from 'axios'

function Updateuser() {

    const token = JSON.parse(localStorage.getItem("token"))

    const handleUpdate = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        axios.patch("http://localhost:8000/account/update/", form,{
            headers:{
             "Authorization": "Bearer " + token.access   
            }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }



  return (
    <div className='w-50 m-auto'>
         <form onSubmit={(e) => handleUpdate(e)}>

         <div>
          <label htmlFor="" className='form-label'>FirstName</label>
          <input type="text" className='form-control' name="first_name" />
        </div>

        <div>
          <label htmlFor="" className='form-label'>LastName</label>
          <input type="text" className='form-control' name="last_name" />
        </div>

        
        <button type="submit" className="btn btn-primary mt-4">Update</button>

      </form>
    </div>
  )
}

export default Updateuser