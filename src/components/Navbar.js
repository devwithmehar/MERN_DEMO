import React from 'react';
import '../Style/Navbar.css';
// import logo from  '../carLogo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='nav'>
           <div id="img">
            {/* <img id="image" src={logo} alt='carLogo' /> */}
            <h1>Car Logo</h1>
           </div>

           <div id="greeting">
               Welcome
           </div>
            
            <div id="login">
                <Link id="login-link" to='/login'>
                  LogIn
                </Link> 
            </div>

            <div id="Register">

            <Link id="register-link" to='/register'>
                   Register
             </Link>
            
            </div>

        </div>
    )
}

export default Navbar
