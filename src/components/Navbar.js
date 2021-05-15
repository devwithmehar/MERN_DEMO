import React from 'react';
import '../Style/Navbar.css';
// import logo from  '../carLogo.jpg'
import {Link} from 'react-router-dom'


const Navbar = (props) => {

    console.log(props.isLogin)
    return (
        <div id='nav'>
           <div id="img">
            {/* <img id="image" src={logo} alt='carLogo' /> */}
            <h1>Car Logo</h1>
           </div>

           <div id="greeting">
               Welcome {props.isLogin ? props.name : '' }
               
           </div>
            
            <div id="login">
                {!props.isLogin?
                <Link id="login-link" to='/login'>
                  LogIn
                </Link> :
                <Link id="login-link" to='' >Logout</Link>
                }
            </div>

            <div id="Register">
            
            {props.isLogin? <Link id="register-link" to=''>
                   {props.username}
             </Link>   
            
            : 
            <Link id="register-link" to='/register'>
                   Register
             </Link>
             }
            </div>

        </div>
    )
}


export default Navbar
