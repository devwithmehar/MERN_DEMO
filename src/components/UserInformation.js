import React, {useContext,useState, useEffect} from 'react'
import {userContext} from '../Context/userContext';
import '../Style/info.css'
import authAxios from '../Axios/Axios'


const UserInformation = () => {

    const [users, setUsers] = useState([]);
  

    const  callUserInfo = async() =>{
         try{
            
            const result = await authAxios.get(`client/login/client`);
            const data = result.data;
            setUsers([data])

         }catch (error){
            console.log(error)
         }
    }
    
   
    useEffect(() =>{
        callUserInfo();
        
    },[])
    
    return (
        
        <div className='info'>
          
           {users.map((user) =>(

                   
                  <div key={user._id} className='info_data' >
                      <label>Name : {user.fullName} </label> <br/>
                      <label>Email : {user.email} </label><br/>
                      <label>Address : {user.City}, {user.Province} {user.postalCode} , {user.Country} </label><br/>
                      
                  </div>
               
           ))}
           
            
        </div>
    )
}

export default UserInformation
