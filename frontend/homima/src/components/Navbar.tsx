import * as React from 'react'
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link } from '@tanstack/react-router'

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    <Link  style={{ textDecoration: 'none', color: 'inherit'}} to="/">
                    Homima
                    </Link> 
                    </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/create-room">Create a Room</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;