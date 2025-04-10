// components/SignInButton.jsx
import React from "react";
import Button from "@mui/material/Button";

function SignInButton() {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: '9px',
                "&:hover": {
                    backgroundColor: "#000",
                },
                mt: 2,
                mb: 1,
                padding: '8px'
            }}
        >
            Sign In
        </Button>
    );
}

export default SignInButton;