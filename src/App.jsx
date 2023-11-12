import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import UserLogin from './Components/UserLogin'
import HomePage from './Components/HomePage'
import AdminSignUp from './Components/AdminSignUp'
import AdminHomePage from './Components/AdminHomePage'
import Error from './Components/Error'
import AboutUs from './Components/AboutUs'
import UserSignUp from './Components/UserSignUp'
import AdminLogin from './Components/AdminLogin'
import Security1 from './Components/Security1'
import Security2 from './Components/Security2'
import Hotels from './Components/Hotels'
import RoomFilterList from './Components/RoomFilterList'
import NavUser from './Components/NavUser'
import UserHomePage from './Components/UserHomePage'
import BookingList from './Components/BookingList'
import Offers from './Components/Offers'
import AddRoom from './Components/AddRoom'
import RoomList from './Components/RoomList'
import RoomBooking from './Components/RoomBooking'
import AcceptedList from './Components/AcceptedList'



const App = () => {
  return (
    <div>
           <BrowserRouter>
           <Routes>
           {/* <Route path='/acceptedlist/1/:index' element={<AcceptedList/>}/>      */}
           <Route path="/" element={<HomePage/>}/>
           <Route path="/userlogin" element={<UserLogin/>}/>
           <Route path="/about" element={<AboutUs/>}/>
           <Route path="/usersignup" element={<UserSignUp/>}/>
           <Route path="/adminlogin" element={<AdminLogin/>}/>
           <Route path="/adminsignup" element={<AdminSignUp/>}/>
           <Route path="/userhome/*" element={<Security2 Child={UserHomePage}/>}/>
           <Route path="/adminhomepage/*" element={<Security1 Child={AdminHomePage}/>}/>
           <Route path='/filterhotels' element={<Hotels/>}/>
           <Route path='/usernav' element={<NavUser/>}/>
           <Route path='/nav' element={<Navbar/>}/>
           <Route path='/bookinglist' element={<BookingList/>}/>
           <Route path="/*" element={<Error/>}/>
           <Route path="/offers" element={<Offers/>}/>
           <Route path="/roombook/:index" element={<RoomFilterList/>}/>
           <Route path="/addroom/:index" element={<AddRoom/>}/>
           <Route path="/acceptedlist/:index" element={<AcceptedList/>}/>

           <Route path="/roomlist/:index" element={<RoomList/>}/>
           <Route path="/roombooking/:index" element={<RoomBooking/>}/>


           </Routes>
            </BrowserRouter>
    </div>
  )
}
export default App
