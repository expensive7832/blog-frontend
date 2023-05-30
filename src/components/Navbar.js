import React from 'react'
import { Link } from "react-router-dom"
import logo from "./../assets/personally-logo.svg"
import axios from 'axios'
function Navbar() {

    const handleDelete  = () =>{
        
        const token = JSON.parse(localStorage.getItem("token"))

        let ask = window.confirm("are you sure you want to delete?")
        if(ask == true){
            axios.delete("http://localhost:8000/account/delete", {
                headers:{
                    "Authorization": "Bearer " + token.access
                }
            })
            .then((res) => alert(res.data))
            .catch((err) => console.log(err))
        }
    }


  return (
    <nav className="navbar navbar-expand-md container">


        <Link to="" className="navbar-brand">
            <img src={logo} alt="brand identity" />
        </Link>

        <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse">
            <ul className="navbar-nav m-auto">
                <li className="nav-item"><Link to="" className='nav-link'>Daily Digest</Link></li>
                <li className="nav-item"><Link to="" className='nav-link'>Design Tools</Link></li>
                <li className="nav-item"><Link to="" className='nav-link'>Tutorial</Link></li>
                <li className="nav-item"><Link to="/signup" className='nav-link'>Signup</Link></li>
                <li className="nav-item"><Link to="/login" className='nav-link'>Login</Link></li>
                <li className="nav-item"><Link to="/update" className='nav-link'>Update</Link></li>
                <li className="nav-item"><Link to="/post" className='nav-link'>Post</Link></li>
                <li className="nav-item"><button onClick={handleDelete} className="btn btn-danger">Delete</button></li>
            </ul>
        </div>

        <button className="btn btn-dark">subscribe</button>
    </nav>
  )
}

export default Navbar