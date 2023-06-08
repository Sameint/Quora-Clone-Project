import { Avatar, Box, Container, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Following() {
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
        <Box sx={{ bgcolor: "orange", height: "100%", borderRadius: "15px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              padding: "8px",
              marginTop: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Back to homepage
          </button>
          <h1 style={{ textAlign: "center" }}>FOLLOWING_DATA</h1>
          <hr />
          {data.map((detail) => {
            return (
              <div className="user_card">
                <h3> {detail.id}</h3>
                <Avatar style={{ marginLeft: "535px", marginTop: "-20px" }} src="https://www.w3schools.com/howto/img_avatar.png" />
                <h3 style={{ color: "#ccc" }}> {detail.name}</h3>
                <h4>Email : {detail.email}</h4>
                <h4>Website : {detail.website}</h4>
              </div>
            );
          })}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Following;
