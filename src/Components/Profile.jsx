import React from 'react'
import NavUser from './NavUser'
import '../Styles/profile.css'
const Profile = () => {
  let user=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      {/* <NavUser/> */}
       <div class="navbar-top">
        <div class="title-pro">
            <h1>Profile</h1>
        </div>

        <ul>
            <li>
                <a href="#message">
                    <i class="fa fa-envelope fa-2x"></i>
                </a>
            </li>
            <li>
                <a href="#notification">
                    <i class="fa fa-bell fa-2x"></i>
                </a>
            </li>
            
        </ul>
    </div>
    <div class="main">
        <div class="card">
            <div class="card-body">
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>phone</td>
                            <td>:</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Aadhaar</td>
                            <td>:</td>
                            <td>{user.adhaar}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>:</td>
                            <td>{user.dob}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>:</td>
                            <td>{user.password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )

}

export default Profile
