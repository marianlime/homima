// src/pages/CreateRoomPage.tsx
import React from 'react';
import { Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';

function CreateRoomPage() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div style={{ padding: '20px' }}>

      <Typography variant="h4">Create a Cinema Room</Typography>
      <Typography variant="body1">
        This is where you can create a new cinema room.
      </Typography>
      <Button variant="contained" color="primary">
        Create Room
      </Button>
    </div>
    </>
  );
}

export default CreateRoomPage;