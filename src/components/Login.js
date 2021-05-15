import React from 'react';
import '../Style/Login.css'
import {Link} from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';
import LoginForm from '../Forms/LoginForm'


const Login = () => {
  
    return(
        <>
        <div  id="overlay_style" />
        <div id="login_page">
            
            <div id="link">
            <Link to='/'> <ClearIcon /> </Link>
            </div>
            {/* The login form is Used here */}
            <LoginForm  />
           
          
        </div>
      </>
   
    )
}

export default Login
