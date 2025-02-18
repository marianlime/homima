import * as React from 'react'
import { AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link } from '@tanstack/react-router'

function Navbar() {
    return (
        <AppBar position="static">
            
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography variant="h5" noWrap>
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        Homima
                        </Link>
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/create-room">Create a room</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                    </Box>
                </Toolbar>

        </AppBar>
    )
}

export default Navbar;