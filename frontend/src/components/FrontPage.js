import React from 'react';
import { useNavigate } from "react-router-dom";

export const FrontPage = () => {
    const navigate = useNavigate();

    const onClickGoToSignIn = () => {
        navigate('/signin');
      }

    return (
    <div className="main">
        <div className="frontpage">
            <p>Welcome to your secret diary</p>
            <button type="button" onClick={onClickGoToSignIn}>LOG IN HERE</button>
        </div>
    </div>
    
    )
}
