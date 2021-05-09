import React from 'react';
import '../Style/Login.css'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'


const Login = () => {
    return(
        <>
        <div  id="overlay_style" />
        <div id="login_page">
            <Link to='/'> BACK {AiOutlineClose}</Link>
            
         
           <h1> This is login Page </h1>
          
        </div>
      </>
   
    )
}

export default Login
