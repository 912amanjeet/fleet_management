import '../createNewPassword/createNewPassword.css'
import { useNavigate } from "react-router-dom";
import CustomModal from '../components/customModal/customModal';
import React,{useState} from 'react';


function CreateNewPassword() {

 
    const navigation = useNavigate();
  const onSave = () => {
     navigation("/Dashboard")
   }
   
    return (
        <div className="Login">
     
        <img src={require('../assets/images/dashboard.png')} className="imageDashBoard" />
    
        <div className="LoginForm"  >
          <div className="contentForm">
                    <div className="forgot-password-text">Create new password</div>
                    <div className="infoText">Your new password must be different from <br/>previous used Password</div>
          <div className="inputMainDiv">
            <div className="emailbox">
              <img src={require('../assets/images/lockIcon.png')} className="img-icon" />
              <input type="text" name="email" className="inputEmail" placeholder="Enter New Password" />
            </div>
            <div className="emailbox">
              <img src={require('../assets/images/lockIcon.png')} className="img-icon" />
              <input type="text" name="email" className="inputEmail" placeholder="Enter Confirm Password" />
            </div>
          </div> 
         
            <button className="button" onClick={onSave}>Save</button>
                   
          </div>
        </div>
      </div>
      
    );
  }
  
  export default CreateNewPassword;