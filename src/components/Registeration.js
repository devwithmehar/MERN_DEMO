import React  from 'react'
import {Link} from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';
import '../Style/Register.css'
import RegisterForm from '../Forms/RegisterForm'
import Modal from 'react-modal'


Modal.setAppElement('#root')
const Registeration = () => {
    
    return (
        <>
        {/* Introductiing Modal  */}
        <Modal isOpen={true}  >
        <div>
        <Link to='/'> <ClearIcon /></Link>
        </div>
        
        
         {/* div for the form */}
         <div id="register">
       
          {/* The Registration form is used here */}
         <RegisterForm />
        </div>

        </Modal>
        </>
    )
}

export default Registeration
