import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Questions() {
    const navigate=useNavigate();
    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "teal", height: "100%", borderRadius: "15px" }}>
          <button  onClick={()  => navigate("/")} 
            style={{position:"absolute",  padding:"8px",marginTop:"10px" ,background:"red",
             color:"white", border:"none",borderRadius:"10px"}}>Back to homepage</button>
            <h1 style={{textAlign:"center"}}>QUESTIONS_DATA</h1><hr/>
                      </Box>
        </Container>
      </React.Fragment>
    )
}

export default Questions;
