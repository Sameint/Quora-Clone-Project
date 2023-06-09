import { Avatar, Box, Container, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './users.css'
function Users() {
    const[data,setData]=useState([]);
    const navigate=useNavigate();

    const userData=async()=>{
        const api=await fetch("https://jsonplaceholder.typicode.com/users");
        const res=await api.json();
        console.log(res);
        setData(res);
    }
    useEffect(()=>{
        userData();
    },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#fff",boxShadow:"0px 0px 4px", height: "100%", borderRadius: "15px" }}>
        <button  onClick={()  => navigate("/")} 
          style={{position:"absolute",  padding:"8px",marginTop:"10px" ,background:"red",
           color:"white", border:"none",borderRadius:"10px"}}>Back to homepage</button>
          <h1 style={{textAlign:"center",color:"red"}}>USER_DETAILS</h1><hr/>
          {data.map((detail) =>{
            return(
                <div className="user_card">
                <h3 style={{color:"#ccc"}}> {detail.name}</h3>
                <Avatar style={{marginLeft:"380px",marginTop:"-30px"}} src="https://miro.medium.com/v2/resize:fit:1600/1*4sM8nwGdO-28m0YoiaEfDA.gif"/>
                <h4>User_Name : {detail.username}</h4>  
                <h4>User_Email : {detail.email}</h4>  
                <h4>User_Phone No. :{detail.phone}</h4>
                <h4>User_City :{detail.address.city}</h4> <hr/>
                </div>
            )
          })}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Users;
