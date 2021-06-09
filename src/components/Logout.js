import React, { useEffect } from 'react'
import { useHistory} from 'react-router-dom'
import authAxios from '../Axios/Axios'

const Logout = () => {

    const history = useHistory();

    const logoutPage = () =>{

        // console.log(Header.token)

        authAxios({
            url:`client/logout`,
            method:'post',
            
        }).then((res) =>{
            localStorage.clear();
            history.push('/');
            window.location.reload();
        }).catch((error) =>{
            console.log(error);
        })

        // localStorage.clear();
        // history.push('/')
        // window.location.reload();
    }

    useEffect( () =>{
        logoutPage();
    },[])

    return (
        <div>
            <h1>Please Wait to Logout.....</h1>
        </div>
    )
}

export default Logout
