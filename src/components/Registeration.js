import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import '../Style/Register.css'

const Registeration = () => {
    return (
        <>
        <div  id="overlay_style" />
        <div id="register">
        <Link to='/'> BACK {AiOutlineClose}</Link>

            <h1>This is Registration Page</h1>
        </div>
        </>
    )
}

export default Registeration
