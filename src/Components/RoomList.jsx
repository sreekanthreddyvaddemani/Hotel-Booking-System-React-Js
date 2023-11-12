
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import '../Styles/addhotel.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
import NavAdminList from './NavAdminList';

const RoomList = () => {
let [content,setContent]=useState([])
let admin=JSON.parse(localStorage.getItem('admin'))
let navigate=useNavigate()
let {index}=useParams()
useEffect(()=>{
  axios.get(`http://localhost:8080/hotel/${index}`).then((response)=>{
    console.log(response.data.data);
    setContent(response.data.data.rooms)
  })
  .catch(()=>{
      console.log("did not get the data");
  })
      },[])


//     let deleteData=(value)=>{
//       axios.get(`http://localhost:8080/bus/delete/${value}`).then(()=>{
// alert("Bus Deleted Successfully")
// window.location.reload(false);
//       }).catch(()=>{
//         alert("Some Thing Is Wrong")
//       })
//   }

//   let updateData=(value)=>{
//     navigate(`/updatebus/${value}`)
// }


// let bookingTickets=(value)=>{
//   axios.get(`http://localhost:8080/bus/${value}`).then((response)=>{
//     localStorage.setItem("tickets",JSON.stringify(response.data.data.tickets))
//     navigate('/adminhomepage/reservations')
//   }).catch(()=>{
//     alert("someThing is wrong")
//   })
// }
let goBack=()=>{
  navigate("/adminhomepage")
      }
  return (
    <div>
      <NavAdminList/>
      <span className='spantab'>
           <table>
              <tr>
									<th>IMAGE</th>
									<th>ROOM NO</th>
									<th>NO OF BEDS</th>
									<th>ROOM TYPE</th>
									<th>COST</th>
									<th>NO OF MEMEBERS</th>



                
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                         <td><img src={x.roomimg} alt="" /></td>
                      <td>{x.room_no}</td>
                      <td>{x.no_beds}</td>
                      <td>{x.room_type}-{x.acOrNonac}</td>
                      <td>{x.cost}</td>
                      <td>{x.no_of_members}</td>


                      

               
                     
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

export default RoomList
