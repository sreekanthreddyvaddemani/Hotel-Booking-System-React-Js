import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../Styles/addhotel.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';

const AdminBusList = () => {
let [content,setContent]=useState([])
let admin=JSON.parse(localStorage.getItem('admin'))
let navigate=useNavigate()
useEffect(()=>{
  axios.get(`http://13.234.127.236:8080/admin/hotels/${admin.id}`).then((response)=>{
    setContent(response.data.data)
  })
  .catch(()=>{
      console.log("did not get the data");
  })
      },[])
  

  let addData=(value)=>{
    navigate(`/addroom/${value}`)
}
let roomlist=(value)=>{
  navigate(`/roomlist/${value}`)
}
let customer=(value)=>{
  navigate(`/acceptedlist/${value}`)
}


let bookingRooms=(value)=>{
  navigate(`/adminhomepage/reservations/${value}`)
  
}
let goBack=()=>{
  navigate("/adminhomepage")
      }
  return (
    <div>
      <span className='spantab'>
           <table>
              <tr>
									<th>IMAGE</th>
									<th>ID</th>
									<th>HOTEL NAME</th>
									<th>ADDRESS</th>
									<th>NO OF ROOMS</th>
                  <th></th>
                  <th></th>
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td><img src={x.hotelimg} alt="" /></td>
                      <td>{x.id}</td>
                      <td>{x.hotelname}</td>
                      <td>{x.address}</td>
                      <td>{x.no_of_rooms}</td>
                      

                      <td id="hbut">
                        <Button className="crud" variant="contained" color="primary"  disableElevation focused onClick={()=>{bookingRooms(x.id)}}>BOOKINGS</Button>                       
                  
                    
                      <Button className="crud" variant="contained" color="success"  disableElevation focused onClick={()=>{addData(x.id)}}>ADD ROOM</Button> 
                      
                  
                      
                      <Button className="crud" variant="contained" color="error"  disableElevation focused onClick={()=>{roomlist(x.id)}}>ROOMS</Button> 
                      
                      <Button className="crud" variant="contained" color="secondary"  disableElevation focused onClick={()=>{customer(x.id)}}>ACCEPTED</Button> 

                      </td>
                     
                    </tr>
                    )
                })
            }
       </table> 
       </span>
<br /><br /><br />
<center>
<Button variant="contained" color="success"  disableElevation focused onClick={goBack}>BACK TO ADMIN HOME PAGE</Button> 

</center>
<Footer/>
    </div> 
  )
}

export default AdminBusList 
