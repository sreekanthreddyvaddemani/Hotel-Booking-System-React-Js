import React from 'react'
import NavUser from './NavUser'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RoomBooking = () => {

    let [tax,setTax]=useState(0)
    let [no_of_rooms,setNoofrooms]=useState(1)

    let hotel=JSON.parse(localStorage.getItem('hotel'))
    let user=JSON.parse(localStorage.getItem('user'))
    let room=JSON.parse(localStorage.getItem('room'))
  





let adddata=(e)=>{
  setNoofrooms(no_of_rooms+1)
}
let subdata=(e)=>{
  setNoofrooms(no_of_rooms-1)


}


    useEffect(()=>{
       setTax(0.15*room.cost*no_of_rooms)

    })

    let handleSubmit=()=>{
      let customer_name=user.name;
      let customer_phone=user.phone;
      let customer_email=user.email;
      let cost=room.cost*no_of_rooms+tax;
      let room_no=room.room_no;
      let status="PENDING"
      let time_of_booking= new Date().toLocaleString();
      let data={customer_name,customer_phone,customer_email,cost,time_of_booking,no_of_rooms,room_no,status}
    axios.post(`http://localhost:8080/roombook/${user.id}/${hotel.id}`,data).then(()=>{
toast.success("DATA SUBMITTED WAIT FOR RESPONSE",{
  position:toast.POSITION.TOP_CENTER
})
    }).catch(()=>{
      toast.error("SOMETHING IS WRONG",{
        position:toast.POSITION.TOP_CENTER
      })
    })
    }
  

  return (
    <div>
        <NavUser/>
    

      <div className="roomdetails">
     <center><h1>DETAILS</h1></center>

<div className="user-room">
<div className="user">
    <h3>NAME  :</h3>
    <h3 className='user-data'>{user.name}</h3>
    <h3>MOBILE NO :</h3>
    <h3 className='user-data'>{user.phone}</h3>
    <h3>EMAIL ID  :</h3>
    <h3 className='user-data'>{user.email}</h3>
</div>
<div className="room">

<h3>HOTEL NAME  :</h3>
    <h3 className='user-data'>{hotel.hotelname}</h3>
    <h3>ROOM NO :</h3>
    <h3 className='user-data'>{room.room_no}</h3>
    <h3>NO OF ROOMS  :</h3>
    <h3 className='user-data'>
<button id="add" onClick={adddata}>+</button>{no_of_rooms}<button id="sub" onClick={subdata}>-</button>
    </h3>

</div>


</div>


<div className="cost-but">

<div className="cost">

    <h3>ROOM COST:</h3>
    <h3 className='user-data'>{room.cost*no_of_rooms}</h3>
    <h3>TAXES  :</h3>
    <h3 className='user-data'>{tax}</h3>
   

</div>
<div className="but">
<h2>TOTAL COST  :</h2>
    <h2 className='user-data'>{room.cost*no_of_rooms+tax}</h2>
<center>

<Button className="costbutton" variant="contained" color='error' placeholder='MM/DD/YYYY'  disableElevation focused onClick={handleSubmit}>SUBMIT</Button > 

</center>


</div>


</div>
      </div>
    </div>
  )
  }

export default RoomBooking
