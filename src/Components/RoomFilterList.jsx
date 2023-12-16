import React, { useState,useEffect } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import NavUser from './NavUser'
// import '../Styles/usersighup.css'
import StarIcon from '@mui/icons-material/Star';
import Person2Icon from '@mui/icons-material/Person2';
const TicketBooking = () => {
   
let [content,setContent]=useState([])
let [hotel,setHotel]=useState([])


let {index}=useParams()
let user=JSON.parse(localStorage.getItem('user'))


let nav=useNavigate()

let booknow=(value)=>{
  localStorage.setItem("room",JSON.stringify(value))
    nav(`/roombooking/${value.id}`)
}







useEffect(()=>{
    axios.get(`http://13.234.127.236:8080/hotel/${index}`)
    .then((res)=>{
      setHotel(res.data.data)
    setContent(res.data.data.rooms)
    }).catch(()=>{
    toast.error("Sorry No data Found")
    })
},[])



let back=()=>{
  nav('/userhome')
}

  return (
<div>
      <NavUser/>
      <div className="spantab">
           
 {
                content.map((x)=>{
                    return(
                    <div className="buslist">
                    <div className="busimg">
                    <img src={x.roomimg} alt="" />
                    </div>
            <div className="busd">
                       <div className="busdata">
                        <div className="travelname">
                       
                        <h1>{hotel.hotelname} HOTEL</h1>
                       
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
              <h2>{x.room_type} - {x.acOrNonac}</h2>
              <h2>{x.no_of_members} Members & {x.no_beds} Beds</h2>
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
              <h3>COST PER ROOM</h3>
            <h1>&#8377;{x.cost}</h1>
            <Button id="costbutton" variant="contained" color='error' placeholder='MM/DD/YYYY'  disableElevation focused onClick={()=>{booknow(x)}}>BOOK NOW</Button > 

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
export default TicketBooking
