import React ,{useState , useEffect , useContext} from 'react';
import '../Style/Navbar.css';
// import logo from  '../carLogo.jpg'
import {Link} from 'react-router-dom';
import {userContext} from '../Context/userContext'


const Navbar = () => {

    const [login, setLogin] = useContext(userContext)
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useContext(userContext)
   
  
  // Make a function to get item from local storage
  const getFromLocalStorage =() =>{
    if(  localStorage.getItem('token'))
    {
      
       setLogin(prev => !prev);
       setFullName(localStorage.getItem('FullName'));
       setUsername(localStorage.getItem('Username'));
       
    }
  }


  useEffect(() => {   
    console.log('I am practicing UseEffect')
    getFromLocalStorage();
  }, []);



    console.log(login)
    return (
        <div id='nav'>
           <div id="img">
            {/* <img id="image" src={logo} alt='carLogo' /> */}
            <h1>Car Logo</h1>
           </div>

           <div id="greeting">
               Welcome {login ? fullName : '' }
               
           </div>
            
            <div id="login">
                {!login?
                <Link id="login-link" to='/login'>
                  LogIn
                </Link> :
                <Link id="login-link" to='/logout' >Logout</Link>
                }
            </div>

            <div id="Register">
            
            {login? <Link id="register-link" to='/userInfo'>
                   {username}
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
