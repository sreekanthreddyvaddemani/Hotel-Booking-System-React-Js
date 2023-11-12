import React from 'react'
import NavUser from './NavUser'
import { Route, Routes } from 'react-router-dom'
import LandingHomePage from './LandingHomePage'
import Profile from './Profile'
import BookingList from './BookingList'
const UserHomePage = () => {
  return (
    <div>
         <NavUser/>
<Routes>
<Route path='/' element={<LandingHomePage/>}/> 

<Route path='/bookinglist' element={<BookingList/>}/>
<Route path='/profile' element={<Profile/>}/>
</Routes>
    </div>
  )
}
export default UserHomePage
