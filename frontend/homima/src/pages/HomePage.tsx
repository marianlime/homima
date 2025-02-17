import * as React from 'react'
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material'

function Homepage() {
    return ( 
        <>
        <div>
        <Navbar/>
        </div>
        <div style={{ padding: '20px'}}>
            <Typography variant="h4">Welcome to Homima, your home cinema</Typography>
            <Typography variant="body1"> Use the navbar to create a room or learn more about the app</Typography>
        </div>
        </>
    );
}

export default Homepage;