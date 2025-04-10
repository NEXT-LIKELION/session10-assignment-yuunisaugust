
import React from "react";
import { Typography, Link, Box, Divider } from "@mui/material";

function FindPassword() {
    return (
        <Box
            sx={{
                textAlign: "center",
                color: "#000", // 전체 텍스트 색 검정
                
            }}
        >
            <Typography variant="body2">
                <Link href="/forgot-password" underline="hover" sx={{ color: "#000" }}>
                    Forgot your password?
                </Link>
            </Typography>
            <Divider
            sx={{ my: 2, borderColor: "#000", color: "#000" }}>or</Divider>
            
        </Box>
    );
}

export default FindPassword;