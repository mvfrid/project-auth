import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const FrontPage = () => {
    const navigate = useNavigate();

    const onClickGoToSignIn = () => {
        navigate('/login');
      }

    return (
    <div className="main-container">
        <div className="frontpage">
            <p>Welcome to your secret diary</p>
            <Button type="submit"
            onClick={onClickGoToSignIn}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
                LOG IN
            </Button>
        </div>
    </div>
    
    )
}
