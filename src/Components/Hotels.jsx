import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import style from "./homecrud.module.css"
import { Link, useNavigate } from "react-router-dom"
// import UserHome from './UserHome'
import '../Styles/addhotel.css'
import Button from '@mui/material/Button';
// import '../Styles/registration.css'
import '../Styles/userlogin.css'
import Footer from './Footer';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import StarIcon from '@mui/icons-material/Star';
import Person2Icon from '@mui/icons-material/Person2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavUser from './NavUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Hotels = () => {
let [content,setContent]=useState([])
let navigate=useNavigate()
let filter=JSON.parse(localStorage.getItem('filter'))
  let showRoom=(value)=>{
    localStorage.setItem("hotel",JSON.stringify(value))
    navigate(`/roombook/${value.id}`)
  }

    let back=()=>{
      navigate('/userhome')
     }

     useEffect(()=>{
      axios.get(`http://13.234.127.236:8080/hotel/filter?address=${filter.address}&dop=${filter.dop}`)
  .then((res)=>{
    setContent(res.data.data)
  }).catch(()=>{
    toast.error("Data Not Found",{
      position:toast.POSITION.TOP_CENTER
  })
  })
    },[])

  return (
    <div>
      <NavUser/>
      <div className="spantab">
                {
                content.map((x)=>{
                    return(
                    <div className="buslist">
                    <div className="busimg">
                    <img src={x.hotelimg} alt="" />
                    </div>
            <div className="busd">
                       <div className="busdata">
                        <div className="travelname">
                       
                        <h1>{x.hotelname} HOTEL</h1>
                       
                          </div>
                   <div className="timedata">
                  <h3>RATING</h3>
                   <div className="rate">
              <div className="rate1">
            <StarIcon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>4.7</p>
              </div>
              <div className="rate2">
                <Person2Icon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>1.0M</p>
              </div>
            </div>
            <h3>PERSONS</h3>
            </div>
            </div>
            <div className="dropdata">
              <h2>Location : {x.address}</h2>
              <h2>Available Date : {x.dop} </h2>
            </div>
            <div className="dropdown">
            <li><a href="">Locations</a></li>
            <li><a href="">Cancellation Policy</a></li>
            <li><a href="">Travel Policy</a></li>
            <li><a href="">Amenities </a></li>
            <li><a href="">Offers </a></li>
            </div>
            </div>
            <div className="ticketcost">
            <center>
              <h4>Free Cancellation</h4>
              <h4>Book With &#8377;0 Payments </h4>
            <h4 id="nos">{x.no_of_rooms} Rooms Available</h4>
            <Button id="costbutton" variant="contained" color='error' placeholder='MM/DD/YYYY'  disableElevation focused onClick={()=>{showRoom(x)}}>SHOWROOMS</Button > 

            </center>
            </div>
                  </div>
                    )
                })
            }
       </div>
<center>
<Button variant="contained" color='success' placeholder='MM/DD/YYYY'  disableElevation focused onClick={back} >BACK TO SEARCH</Button > 
</center>
<Footer/>
<ToastContainer/>
    </div> 
  )
}
export default Hotels