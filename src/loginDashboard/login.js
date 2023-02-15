import '../loginDashboard/login.css'
import { useNavigate } from "react-router-dom";




function Login(props) {
  const navigation = useNavigate();
  const onLogin = () => {
    alert("welocome on fleet")
  }
  const onAddCart = () => {
    
  }
  const onForgotPassword = () => {
  navigation("/Forgot")
  }
  const onCheck = () => {
    alert("checked")
  }
    return (
        <div className="Login">
     
        <img src={require('../assets/images/dashboard.png')} className="imageDashBoard" />
    
        <div className="LoginForm"  >
        
          <div className="contentForm">
          <h1 className="adminText">ADMIN LOGIN</h1>
          <div className="inputMainDiv">
            <div className="emailbox">
              <img src={require('../assets/images/emailIcon.png')} className="img-icon" />
              <input type="text" name="email" className="inputEmail" placeholder="Email" />
            </div>
            <div className="passwordbox">
            <img src={require('../assets/images/lockIcon.png')} className="img-icon"/>
              <input type="text" name="password" className="inputPassword" placeholder="Password" />
              </div>
          </div> 
          <div className="checkRemberBox">
          <button className="checkBox" onClick={onCheck}/>
              <div className="remecmberMe" >Remember me</div> 
              <button className="forgotButton" onClick={onForgotPassword}>
            Forgot Password
              </button>
            </div>
            <button className="button" onClick={onLogin}>
           Log in
            </button>
            <button className="button" onClick={onAddCart}>
          Add to cart
            </button>
            <img src={require("../assets/images/addtocart.png")} />
            <div>

            </div>
          </div>
        </div>
       
         </div>
    );
  }
  
  export default Login;