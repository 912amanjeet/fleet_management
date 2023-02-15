import '../forgot/forgot.css'
import { useNavigate } from "react-router-dom";
import CustomModal from '../components/customModal/customModal';
import React,{useState} from 'react';


function Forgot() {

  const [state, setState] = useState({
    modalOpen: false,
  
})

    const navigation = useNavigate();
    const onBack = () => {
        navigation(-1)
        }
    const onReset = () => {
      setState({
        ...state,
        modalOpen:true
    })
    }
  const modalClose = () => {
  navigation("/createNewPassword")
      // setState({
      //   ...state,
      //   modalOpen:false
      // })
    
   }
    return (
        <div className="Login">
     
        <img src={require('../assets/images/dashboard.png')} className="imageDashBoard" />
    
        <div className="LoginForm"  >
          <div className="contentForm">
                    <div className="forgot-password-text">FORGOT PASSWORD?</div>
                    <div className="infoText">Enter your Email We will send you password
                        <br/>reset link</div>
          <div className="inputMainDiv">
            <div className="emailbox">
              <img src={require('../assets/images/emailIcon.png')} className="img-icon" />
              <input type="text" name="email" className="inputEmail" placeholder="Email" />
            </div>
          
          </div> 
         
            <button className="button" onClick={onReset}>
           Reset Password
                    </button>
                    <button className="backButton" onClick={onBack}>
         Back
            </button>
          </div>
        </div>
        <CustomModal
          modalOpen={state.modalOpen}
          onModalClose={modalClose}
          title={"Check Your Mail"}
          buttonTitle={"Okay"}
          messageFromWeb={"We've sent an email to this email    address. Click the link in the email to reset your password."}
          showCloseIcon={false}
        />
      </div>
      
    );
  }
  
  export default Forgot;