import { TextField, Button, Grid, Typography } from '@mui/material'
import React, { createContext, useState } from 'react'
import { motion } from "framer-motion"
import statemap from './statemap'
import { certiWhite } from '../../assets/images'

export default function Home() {
    const [authState, setAuthState] = useState("login")
    const toggleAuthState = () => {
        authState === "login" ? setAuthState("signup") : setAuthState("login")
    }

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

                    }}
                >
                    {statemap[authState]}
                    {
                        authState === "login" ?
                            <Typography variant="caption" component="paragraph">New here? <span style={{ cursor: "pointer", color: "GrayText" }} onClick={toggleAuthState}>Sign Up</span></Typography>
                            :
                            <Typography variant="caption" component="p">Already have an account? <span style={{ cursor: "pointer", color: "GrayText" }} onClick={toggleAuthState}>Sign In</span></Typography>
                    }
                </div>
            </Grid>
        </Grid>
    )
}

