import { TextField, Button, Grid } from '@mui/material'
import React from 'react'

export default function Home() {
    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            sx={{ height: "100%" }}
        >
            <Grid sx={{ border: "solid 1px black" }} items xs={12} sm={6} md={6}>

            </Grid>
            <Grid
                container
                sm={6}
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                md={0}>
                <TextField label="Name" required="true" />
                <Button size="large" color="primary" variant="contained">Enter</Button>
            </Grid>
        </Grid>
    )
}

