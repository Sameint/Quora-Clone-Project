import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Box, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './users.css'
function Users() {
  const user = useSelector(selectUser);
    const navigate = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: '100%', borderRadius: '15px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              position: 'absolute',
              padding: '8px',
              marginTop: '10px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            Back to homepage
          </button>
          <h1 style={{ textAlign: 'center' }}>USER_DATA</h1>
          <hr />
          <div >
            <h2>User Data:</h2>
            {user && (
              <ul>
                <li>User: Unknown</li>
                <li>Email: {user.email}</li>
                {/* Render other properties of the user object if needed */}
              </ul>
            )}
          </div>
                  </Box>
      </Container>
    </React.Fragment>
  );
}

export default Users;