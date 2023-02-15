import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import CustomModal from "../components/customModal/customModal";
import Navbar from "../components/navbar/navbar";

import CreateNewPassword from "../createNewPassword/createNewPassword";
import Dashboard from "../dashboard/dashboard";
import Forgot from '../forgot/forgot';
import Login from '../loginDashboard/login';

const Routing = (props) => {
   
    return (
        <Router>
            <Navbar
         
            />
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/createNewPassword" element={<CreateNewPassword />} />
                <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    )
}
export default Routing;