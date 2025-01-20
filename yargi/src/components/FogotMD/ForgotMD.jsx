import React, { useState } from 'react';
import './ForgotMD.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotMD = () => {
    const [values, setValues] = useState({
        email: ''
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/forgot', values)
            .then(res => {
                console.log(res);
                alert('Un email a été envoyé pour réinitialiser votre mot de passe.');
                navigate('/log');
            })
            .catch(err => {
                console.error(err);
                alert('Échec de l\'envoi de l\'email. Veuillez réessayer.');
            });
    };

    return (
        <div className='container1'>
            <div className="container2">
                <form onSubmit={handleSubmit}>
                    <div className="header">
                        <div className="text">
                            <h3>Oublie le mot de passe</h3>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="submit-container pos">
                        <button type="submit" className="submit1">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotMD;
