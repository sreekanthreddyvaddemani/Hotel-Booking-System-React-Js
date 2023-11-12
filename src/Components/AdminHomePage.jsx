import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Reservations from './Reservations'
import AdminHotelList from './AdminHotelList'

import NavAdminList from './NavAdminList'
import AddHotel from './AddHotel'
import AcceptedList from './AcceptedList'
const AdminHomePage = () => {
  return (
    <div>
     <NavAdminList/>
<Routes>
<Route path='/acceptedlist/1/:index' element={<AcceptedList/>}/>
<Route path='/addhotel' element={<AddHotel/>}/>
<Route path='/reservations/:index' element={<Reservations/>}/>
<Route path='/hotellist' element={<AdminHotelList/>}/>
</Routes>


<div className="adminhome">

  
</div>
    </div>
  )
}
export default AdminHomePage
