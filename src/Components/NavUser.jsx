import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LuggageIcon from '@mui/icons-material/Luggage';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import TrainIcon from '@mui/icons-material/Train';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const NavUser = () => {
  let [n,setN]=useState()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
  setN(user.name.slice(0,1));
  })
let navigate=useNavigate()
  let logOut=(()=>{
    localStorage.clear()
    navigate("/")
    toast.error("Account LogOut Successfully",{
      position:toast.POSITION.TOP_CENTER
  })
  })
  let submit=()=>{
    navigate("/")
  }
  return (
    <div>
      <div id="navuser">
      <div id="logouser">
        <div id='logo1user' onClick={submit}>
          <div id='logo2user'>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"black" } }/>
            <h2>LONG</h2></div>
            <div id='logo3user'>
            <h2>TRIP</h2>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"white" } }/>
            </div>
        </div>
      </div>
      <div id="contents1user">
             <div className="conuser">
              <HouseIcon style={{ color: "white"}}/>
                <li id=""><Link to="/userhome">HOME</Link></li></div>
            
             <div className="conuser">
                <li id=""><Link to="/userhome/bookinglist">HOTELBOOKINGS</Link></li></div>


                <div className="conuser"><LocalOfferIcon style={{ color: "white" }}/>  
                <li id=""><Link to="/offers">OFFERS</Link></li></div>

                </div>
                

               
                    <div className="profile">
   <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h1>{n}</h1>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
    </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default NavUser
