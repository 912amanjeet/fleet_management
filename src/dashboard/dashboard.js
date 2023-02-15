import '../dashboard/dashboard.css'
// import { useNavigate } from "react-router-dom";
import React from 'react';
function Dashboard() {


    // const navigation = useNavigate();
   
    
  
  return (
      
       
     
      <div className="DashboardBackground">
       
      <div className='divi'>
        <select name="cars" id="cars" className='dropdownStyle'>
        <option value="" disabled selected>Select District</option>
  <option value="volvo">Noida</option>
  <option value="saab">Ghaziabad</option>
</select>
      </div>
      <div className='divi'>
        <select name="cars" id="cars" className='dropdownStyle'>
        <option value="" disabled selected>Vehicle Type</option>
  <option value="volvo">Taxi</option>
  <option value="saab">Bus</option>
</select>
      </div>
      <div className='divi'>
        <select name="cars" id="cars" className='dropdownStyle' aria-disabled>
        <option value="">Select Year</option>
  <option value="volvo">2022</option>
  <option value="saab">2023</option>

</select>
     </div>
        </div>
    
    
      
    );
  }
  
  export default Dashboard;