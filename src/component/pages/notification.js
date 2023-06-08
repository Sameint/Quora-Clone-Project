import React from 'react'
import { useNavigate } from 'react-router-dom';

function Notification() {
    
    const navigate=useNavigate();
    return (
        <div>
             <img src="https://cdn.dribbble.com/users/883236/screenshots/6906237/day_890_notifications_empty_state_ui_design-.png" alt='error'
          style={{width:"100%",position:"absolute",height:"100%"}}/>
          <button  onClick={()  => navigate("/")} 
          style={{position:"absolute", left:"45%" ,top:"160px", padding:"8px" ,background:"red",
           color:"white", border:"none",borderRadius:"10px"}}>Back to homepage</button> 
        </div>
    )
}

export default Notification;

