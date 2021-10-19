import React, { createRef, useRef, useState } from 'react'
import { Typography, Button, Grid, Box } from '@mui/material'
import { Input } from '../../theme/components'
import { certiWhite, certiYellow } from '../../assets/images'
import { FingerPrint, FingerPrint2 } from '../../assets/lottie'


export default function Login() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            sx={{ height: "calc(100vh - 2rem)" }}
        >
            <Grid className="hide-small" sx={{ border: "solid 1px black" }}
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                sx={{ backgroundColor: "#ff9b21", }}
                xs={12}
                sm={6}
                md={6}>
                <img src={certiWhite} />
            </Grid>
            <Grid
                sm={6}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                md={6}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "80%"
                    }}
                >

                    <Input label="Email" required={true} />
                    <Input label="Password" type="password" required={true} />
                    <Button startIcon={<FingerPrint2 height={50} width={50} />} size="large" color="primary" variant="contained">Enter</Button>
                    <Typography variant="caption" component="">New here? Sign Up</Typography>
                </div>

            </Grid>
        </Grid >
    )
}
