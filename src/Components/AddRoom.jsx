import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/addhotel.css'
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NavAdminList from './NavAdminList';
const AddRoom = () => {
    let {index}=useParams();
let [room_no,setroom_no]=useState("")
let [no_beds,setno_beds]=useState("")
let [room_type,setroom_type]=useState("")
let [cost,setCost]=useState("")
let [roomimg,setRoomImg]=useState("")

let [acOrNonac,setacOrNonac]=useState("")
let [no_of_members,setno_of_members]=useState("")

let room_noData=(e)=>{
    setroom_no(e.target.value)
}
   let no_bedsData=(e)=>{
    setno_beds(e.target.value)
}



let room_typeData=(e)=>{
    setroom_type(e.target.value)
}
   let acOrNonacData=(e)=>{
    setacOrNonac(e.target.value)
}
let imgData=(e)=>{
    setRoomImg(e.target.value)
}
   

let costData=(e)=>{
    setCost(e.target.value)
}
let no_of_membersData=(e)=>{
    setno_of_members(e.target.value)
}
let handleSubmit=(e)=>{
    e.preventDefault()
    let status="NOT BOOKED";
    let data={room_no,cost,no_beds,room_type,acOrNonac,no_of_members,roomimg,status}
axios.post(`http://13.234.127.236:8080/hotel/room/${index}`,data)
.then(()=>{

toast.success("Room Added",{
    position:toast.POSITION.TOP_CENTER
})
}).catch(()=>{
toast.error("Room Not Added",{ 
    position:toast.POSITION.TOP_CENTER
})
})
}

return (
<div id="main12">
    <NavAdminList/>
<div id="scroll12">
                <div className="container12">
                    <center><div className="title12">ADD ROOM REGISTRATION</div></center>
                    <div className="content12">
                        <form action="">
                            <div className="user-details12">
                                <div className="input-box12">
                                    <span className="details12">ENTER ROOM NO</span> <input type="number" id="" value={room_no} onChange={room_noData} 
                                        placeholder="Enter Room No" name="room_no"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">Enter No Beds</span> <input type="number" value={no_beds}  onChange={no_bedsData}
                                        placeholder="Enter Bus Number " name="no_beds"/>
                                </div>
                
                                <div className="input-box12">
                                    <span className="details12">room_type</span> <input type="text" value={room_type}  onChange={room_typeData}
                                        placeholder="Enter To Adress" name="room_type"/>
                                </div>
                                 <div className="input-box12">
                                    <span className="details12">AC OR NON AC</span> <input type="text" value={acOrNonac} onChange={acOrNonacData}
                                        placeholder="" name="acOrNonac"/>
                                </div>

                                <div className="input-box12">
                                    <span className="details12">no_of_members</span> <input type="number" value={no_of_members}  onChange={no_of_membersData}
                                        placeholder="Enter Seats" name="no_of_members"/>
                                </div>

                                <div className="input-box12">
                                    <span className="details12" >Cost Per Room</span> <input type="number" value={cost} onChange={costData}
                                        placeholder="Enter Number of seats" name="cost"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">ROOM IMAGE</span> <input type="url" value={roomimg}  onChange={imgData}
                                        placeholder="Enter URL" name="roomimg"/>
                                </div> 
                                        
                </div>
           <center>
    <div id="div412">
          <Button variant="contained" color="error"  disableElevation focused onClick={handleSubmit}>ADD ROOM</Button> 
    </div>
                </center>
<br/>      </form>
                    </div>
                </div>
            </div>
<ToastContainer/>
            <Footer/>

            </div>
  )
}
export default AddRoom
