import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LuggageIcon from '@mui/icons-material/Luggage';
import HomeIcon from '@mui/icons-material/Home';
const NavAdminList = () => {
let navigate=useNavigate()
  let logOut=(()=>{
    localStorage.clear()
    toast.error("Account LogOut Successfully",{
      position:toast.POSITION.TOP_CENTER
  })
    navigate("/")
  })
  let logoclick=()=>{
    navigate("/adminhomepage")
  }
  return (
    <div>
      <div id="navadmin">
      <div id="logoadmin">
        <div id='logo1admin' onClick={logoclick}>
          <div id='logo2admin'>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"white" } }/>
            <h2>LONG</h2></div>
            <div id='logo3admin'>
            <h2>TRIP</h2>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"black" } }/>
            </div>
        </div>
      </div>
      <div id="contents1admin">
             <div className="conadmin" ><HomeIcon style={{ color: "rgb(224, 101, 19)" }}/><li><Link to="/adminhomepage">HOME</Link></li></div>
             <h2 id="line">|</h2>
             <div className="conadmin" ><HomeIcon style={{ color: "rgb(224, 101, 19)" }}/><li><Link to="/adminhomepage/addhotel">ADDHOTEL</Link></li></div>
             <h2 id="line">|</h2>

             <div className="conadmin"><HomeIcon style={{ color: "rgb(224, 101, 19)" }}/><li id=""><Link to="/adminhomepage/hotellist">HOTELS</Link></li></div>
             <h2 id="line">|</h2>
             
             
             <div className="conadmin" onClick={logOut}><li><Link>LOGOUT</Link></li></div>
      </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default NavAdminList
