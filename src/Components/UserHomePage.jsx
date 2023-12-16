import React from 'react'
import NavUser from './NavUser'
import { Route, Routes } from 'react-router-dom'
import LandingHomePage from './LandingHomePage'
import Profile from './Profile'
import BookingList from './BookingList'
import Offers from './Offers'
const UserHomePage = () => {
  return (
    <div>
         <NavUser/>
<Routes>
<Route path='/' element={<LandingHomePage/>}/> 

<Route path='/bookinglist' element={<BookingList/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path="/offers" element={<Offers/>}/>
<Route path="/profile" element={<Profile/>}/>


</Routes>
    </div>
  )
}
export default UserHomePage
