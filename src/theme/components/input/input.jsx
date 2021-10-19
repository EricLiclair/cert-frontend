import React from 'react'
import { TextField, Box } from '@mui/material'

export default function Input({ children, ...props }) {
    return (
        <Box sx={{ p: 2, }}>
            <TextField  {...props}>{children}</TextField>
        </Box>
    )
}
