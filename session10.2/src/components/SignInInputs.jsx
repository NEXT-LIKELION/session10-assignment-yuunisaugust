import React from "react";
import { TextField } from "@mui/material";

export default function SignInInputs() {
    return (
        <>
            Email
            <TextField
                sx={{
                    "& .MuiInputBase-root": {
                        backgroundColor: "#fafafa", 
                        borderRadius: '9px'
                        
                    }
                }}
                fullWidth
                label="your@email.com"
                name="email"
                autoComplete="email"
                autoFocus
            />
            Password
            <TextField
            sx={{
                "& .MuiInputBase-root": {
                    backgroundColor: "#fafafa", 
                    borderRadius: '9px'

                }
            }}
                fullWidth
                name="password"
                label="⦁⦁⦁⦁⦁⦁"
                type="password"
                autoComplete="current-password"
            />
        </>
    );
}
