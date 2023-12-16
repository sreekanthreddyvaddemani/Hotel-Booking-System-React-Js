import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/addhotel.css'
import Button from '@mui/material/Button';
import Footer from './Footer';
const AddHotel = () => {
let [hotelname,setName]=useState("")
let [address,setAddress]=useState("")
let [no_of_rooms,setNo_of_rooms]=useState("")
let [dop,setDop]=useState("")
let [hotelimg,setHotelImg]=useState("")




let admin=JSON.parse(localStorage.getItem('admin'))
let nameData=(e)=>{
    setName(e.target.value)
}
   let addressData=(e)=>{
    setAddress(e.target.value)
}
let dopData=(e)=>{
    setDop(e.target.value)
}
let roomData=(e)=>{
    setNo_of_rooms(e.target.value)
}
let imgData=(e)=>{
    setHotelImg(e.target.value)
}
   

let handleSubmit=(e)=>{
    e.preventDefault()

    let data={hotelname,address,no_of_rooms,hotelimg,dop}
axios.post(`http://13.234.127.236:8080/hotel/${admin.id}`,data)
.then(()=>{
toast.success("Hotel Added Successfully",{
    position:toast.POSITION.TOP_CENTER
})
}).catch(()=>{
toast.error("Hotel Not Added",{ 
    position:toast.POSITION.TOP_CENTER
})

})
}
return (
<div id="main12">
<div id="scroll12">
                <div className="container12">
                    <center><div className="title12">HOTEL REGISTRATION</div></center>
                    <div className="content12">
                        <form action="">
                            <div className="user-details12">
                                <div className="input-box12">
                                    <span className="details12">Hotel Name</span> <input type="text" id="" value={hotelname} onChange={nameData} 
                                        placeholder="Enter Hotel Name" name="hotelname"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">ADDRESS</span> <input type="text" value={address}  onChange={addressData}
                                        placeholder="Enter Address " name="address"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">NO OF Rooms</span> <input type="number" value={no_of_rooms}  onChange={roomData}
                                        placeholder="Enter No of Rooms" name="no_of_rooms"/>
                                </div>  
                                <div className="input-box12">
                                    <span className="details12">NO OF AVAILABLE</span> <input type="date" value={dop}  onChange={dopData}
                                        placeholder="Enter Date" name="hotelimg"/>
                                </div> 
                                <div className="input-box12">
                                    <span className="details12">HOTEL IMAGE</span> <input type="url" value={hotelimg}  onChange={imgData}
                                        placeholder="Enter URL" name="hotelimg"/>
                                </div>    
                </div>
           <center>
    <div id="div412">
          <Button variant="contained" color="error"  disableElevation focused onClick={handleSubmit}>REGISTER</Button> 
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
export default AddHotel
