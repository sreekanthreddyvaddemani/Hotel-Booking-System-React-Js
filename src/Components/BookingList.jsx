import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import style from'../Styles/addhotel.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import axios from 'axios'

import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
const BookingList = () => {
  let {index}=useParams()
let [content,setContent]=useState([])
let navigate=useNavigate()

let user=JSON.parse(localStorage.getItem('user'))

 let onBack=()=>{
    // navigate('/adminhomepage/buslist')
  }


  useEffect(()=>{
    axios.get(`http://localhost:8080/users/${user.id}`).then((response)=>{
setContent(response.data.data.roombokings)
console.log(response.data.data);
  }).catch(()=>{
    alert("someThing is wrong")
  })
  },[])
  return (
    <div>
      <span className={style.spantab}>
           <table>
              <tr>
									<th>ID</th>
									<th>CUS NAME</th>
									<th>CUS EMAIL</th>
									<th>CUS PHONE</th>
									<th>ROOM NO</th>
									<th>COST</th>
									<th>TIME OF BOOK</th>
									<th>NO OF ROOMS</th>
									<th>STATUS</th>

								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td>{x.id}</td>
                      <td>{x.customer_name}</td>
                      <td>{x.customer_email}</td>
                      <td>{x.customer_phone}</td>
                      <td>{x.room_no}</td>
                      <td>{x.cost}</td>
                      <td>{x.time_of_booking}</td>
                      <td>{x.no_of_rooms}</td>
                      <td id="status">{x.status}</td>



                    </tr>
                    )
                })
            }
       </table> 
       </span>
       <br /><br />
       <center>
        <Button variant="contained" color="success" onClick={onBack} disableElevation focused>BACK</Button> 
       </center>
      <Footer/>
    </div>
  )
}
export default BookingList
