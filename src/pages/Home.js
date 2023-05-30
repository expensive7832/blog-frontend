import React, { useEffect, useState } from 'react'
import "./home.css"
import Blogcard from '../components/Blogcard'
import img1 from "./../assets/img1.png"
import img2 from "./../assets/img2.png"
import img3 from "./../assets/img3.png"
import axios from "axios"
function Home() {

  const [datas, setDatas] = useState([])

 useEffect(() =>{
  
  axios.get("http://localhost:8000/post/getarticles/")
  .then((res) => setDatas(res.data))
  .catch((err) => console.log(err))

 }, [])


  return (
    <div className="home">
  

        <div className="banner">
            <h2>Minimal blog template for <br /> creative expressions</h2>
            <p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
        </div>

        <div className="articles p-5 ">
            <div className="d-flex justify-content-between align-items-center w-50 m-auto ">
                <p>Daily Digest</p>
                <button className="btn p-1 bg-white">view All</button>
            </div>

            <div className="article">
              {datas?.map(data =>(
                <Blogcard title={data.title} pic={`http://localhost:8000/${data.image}`}/>
                
              ))}

             
            
            </div>
        </div>
    </div>
  )
}

export default Home