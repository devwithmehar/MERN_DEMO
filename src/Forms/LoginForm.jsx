import {React, useState } from 'react'
import '../Style/LoginForm.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import authAxios from '../Axios/Axios'


const Login_Form = () => {
 const history = useHistory(); // allows to programatically change the URL

 const [userLogin, setUserLogin] = useState({
    username : '',
    password: ''
 })
// const [isLogin, setIsLogin] = useState(false)
// const [name, setName] = useState('');


 const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name ,value);

    setUserLogin({...userLogin,[name] : value})
 }

 const handleSubmit = (e) =>{
    e.preventDefault();

    authAxios.post(`client/login`,userLogin)
    .then( res => {
        console.log('User Loged IN!');
        
         localStorage.setItem('token', res.data.tokens[0].token);
         console.log(res.data.tokens[0].token);
        //  setIsLogin((prev) => true);
         localStorage.setItem('loginType', 'true');
        //  setName(res.data.fullName)
         localStorage.setItem('FullName',res.data.fullName);
         localStorage.setItem('Username', res.data.username);
         
         
         history.push('/')
        window.location.reload();
    })
    .catch(error =>{
        localStorage.setItem('loginType', 'false');
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
             {/* {isLogin ? <h5>Thank you for Login {name}</h5> : ""} */}
             
        </div>
    )
}

export default Login_Form
