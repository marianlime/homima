import React from 'react';
import Navbar from '../components/Navbar'

function AboutPage() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">About</Typography>
      <Typography variant="body1">
        This app allows you to create and join cinema rooms to watch videos together.
      </Typography>
    </div>
    </>
  );
}

export default AboutPage;