import React, { createRef, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Typography, Button, Grid, Box } from '@mui/material'
import { Input } from '../../../../theme/components'
import { certiWhite, certiYellow } from '../../../../assets/images'
import { FingerPrint, FingerPrint2 } from '../../../../assets/lottie'


export default function Login() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: "1rem",
                border: "1px solid rgb(229, 232, 236)"
            }}
        >

            <Input label="Email" required={true} />
            <Input label="Password" type="password" required={true} />
            <Button size="large" color="primary" variant="contained">Sign In</Button>
        </motion.div>
    )
}
