import {React , useState} from 'react'
import axios from 'axios'
import {message} from 'antd';


const RegisterForm = () => {

    //Message if the Register Success
    const success =(messages) =>{
    message.success('Registration Successful')
}

    //Message if the Registration Fails
    const fail = (messages) =>{
        message.error('Registration fail')
    }
    
    const [userRegistration, setUserRegistration] = useState({
        username: '',
        fullName: '',
        phone: '',
        email: '',
        Street: '',
        City: '',
        Province: '',
        Country: '',
        postalCode: '',
        password: '',
        confirmpassword: ''
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name ,value);

        setUserRegistration({ ...userRegistration, [name] : value });
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(userRegistration.password === userRegistration.confirmpassword){

        
        axios.post(`http://localhost:5000/client/register`,userRegistration)
        .then(res => {
            success();
        })
        .then(() => {
            window.location.href = '/login';
            console.log(`user Added!`);
        })
        .catch((err) => {
            fail();
            console.log(`Error is ${err}`)
        })

        }
       
    }

    return (
        <div>
            <h1>Please Enter the Infomation to Join Us!</h1>
            <form action="" onSubmit={handleSubmit}>
             <div id ='form'>
                <label htmlFor='username' id='usernameLabel'>Username : </label>
                <input id='username' type='text' name='username' required 
                value={userRegistration.username}
                onChange={handleInput}
                /><br/>

                <label htmlFor='fullName' id="fnameLabel">Full Name : </label> 
                <input id='fname' type='text' name='fullName' required 
                value={userRegistration.fullName}
                onChange={handleInput}
                /> <br/>    
                
          

                <label htmlFor='phone' id='phoneLabel' > Phone : </label>
                <input type='tel' 
                 name='phone' required 
                 minlength="10" maxlength="10"
                value={userRegistration.phone}
                onChange={handleInput}
                /><br/>

                <label htmlFor='email' id='emailLabel'>Email-ID : </label>
                <input type='email' name='email' required
                value={userRegistration.email}
                onChange={handleInput}
                /><br/>

                <div id ="address">
                    <h3>Address</h3>

                 <label htmlFor='Street' id='streetLable'>Street </label>
                 <input id='street' type='text' name='Street' required
                 value={userRegistration.street}
                 onChange={handleInput}
                 /><br/>

                 <label htmlFor='City' id='cityLable' >City </label>
                 <input id='city' type='text'  name='City' required
                 value={userRegistration.city}
                 onChange={handleInput}
                 /><br/>

                 <label htmlFor='Province'  id='provinceLable'>Province </label>
                 <input  id='province' type='text' name='Province' required
                 value={userRegistration.province}
                 onChange={handleInput}
                 /><br/>

                 <label htmlFor='Country' id='countryLable' >Country </label>
                 <input id='country' type='text' name='Country' required
                 value={userRegistration.country}
                 onChange={handleInput}
                 /><br/>

                 <label htmlFor='postalCode' id='zipLable'>Postal Code </label>
                 <input id="zip" name="postalCode" type="text" inputmode="numeric" 
                 required
                 value={userRegistration.zip}
                 onChange={handleInput}
                 /><br/>
                </div>

                <label htmlFor='password' id='passwordLabel'>Password : </label>
                <input id='password' type='password' name='password' required
                value={userRegistration.password}
                onChange={handleInput}
                /><br/>

                <label htmlFor='confirmpassword' id='cpasswordLabel'>Confirm Password : </label>
                <input id='cpassword' type='password' name='confirmpassword'  required
                value={userRegistration.cpassword}
                onChange={handleInput}
                /> <br/>


                <button id='register' type='submit'>Register</button>
             </div> 
             </form>
        </div>
    )
}

export default RegisterForm
