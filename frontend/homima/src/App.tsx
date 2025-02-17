import * as React from 'react'
import { Button, Card, CardContent, Typography, TextField} from '@mui/material'

function App() {
    return (
        <div style={{ padding: '20px'}}>
            <Card style={{ marginTop: '20px', background: "#48494B"}}>
            <CardContent>
                <Typography variant="h5" component="h2" color="secondary">
                    Welcome to this shit side project for now
                </Typography>
            </CardContent>
            </Card>

            <TextField style={{margin: '5px'}}id="standard-basic" label="Insert your video link here" variant="standard"></TextField>

            <Button style={{ marginTop: '15px'}} variant="contained" color="primary">
                Watch!
            </Button>
        </div>
    )
}

export default App

