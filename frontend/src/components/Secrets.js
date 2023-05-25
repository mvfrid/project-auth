import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "reducers/user";
import { secrets } from "reducers/secrets";
import { API_URL } from "utils/urls";
import { Button } from '@mui/material';

export const Secrets = () => {
    const [message, setMessage] = useState("");
    const secretItems = useSelector((store)  => store.secrets.items);
    const accessToken = useSelector((store) => store.user.accessToken);
    const username = useSelector((store) => store.user.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!accessToken) {
            navigate("/login")
        }
    }, [accessToken]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
        }
        fetch(API_URL("secrets"), options)
            .then(data => data.json())
            .then(data => {
                if(data.success) {
                    console.log('data:', data)
                    console.log('secretItems', secretItems)
                    dispatch(secrets.actions.setError(null));
                    dispatch(secrets.actions.setItems(data.response));
                } else {
                    dispatch(secrets.actions.setError(response));
                    dispatch(secrets.actions.setItems([]));
                }
            })
    }, []);

    const handleSubmit = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            },
            body: JSON.stringify({ message })
        };

        try {
            const response = await fetch(API_URL("secrets"), options);
            const data = await response.json();

            if (data.success) {
                // Update secretItems with the new secret
                const updatedSecretItems = [...secretItems, data.response];
                dispatch(secrets.actions.setError(null));
                dispatch(secrets.actions.setItems(updatedSecretItems));
            } else {
                dispatch(secrets.actions.setError(data.response));
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const handleLogOut = () => {
        dispatch(user.actions.signOut());
        if(!accessToken) {
            navigate("/login")
        }
    }


    return (
        <div className="main">
            <div className="secret-wrapper">
                <h2>Hello {username}</h2>
                <h3>Write down your secrets here:</h3>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="button" onClick={handleSubmit}>Submit</button>
                <div className="secret-posts">
                    {secretItems.map((item) => {
                        return (
                        <div className="post">
                            <p>{item.message}</p>
                        </div>
                        );
                    })}
                </div>
                <Button 
                type="button"
                onClick={handleLogOut}
                variant="contained">
                    Log out
                </Button>

                {/* <button type="button">Log out</button> */}
            </div>
        </div>
    )
}