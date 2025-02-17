// src/pages/AboutPage.tsx
import React from 'react';
import { Typography } from '@mui/material';

function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">About</Typography>
      <Typography variant="body1">
        This app allows you to create and join cinema rooms to watch videos together.
      </Typography>
    </div>
  );
}

export default AboutPage;