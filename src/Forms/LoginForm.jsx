import {React, useState} from 'react'
import '../Style/LoginForm.css'
import axios from 'axios'

const Login_Form = () => {
 const [userLogin, setUserLogin] = useState({
    username : '',
    password: ''
 })

 const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name ,value);

    setUserLogin({...userLogin,[name] : value})
 }

 const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post(`http://localhost:5000/client/login`,userLogin)
    .then( res => {
        console.log('User Loged IN!');
    })
    .catch(error =>{
        console.log(`Error is ${error}`);
    })
 }

    return (
        <div id="Login_form">
            <h1> LOG - IN </h1>
            <form onSubmit={handleSubmit}>

             <label htmlFor='username' >Username</label><br />
             <input type='text' name='username'
             value={userLogin.username}
             onChange={handleInput}
             /><br />
             
             <label htmlFor='password' >Password</label><br />
             <input type='password' name='password' 
             value={userLogin.password}
             onChange={handleInput}
             /><br />
             
             <button type='submit'>Login</button>

             </form>
        </div>
    )
}

export default Login_Form
