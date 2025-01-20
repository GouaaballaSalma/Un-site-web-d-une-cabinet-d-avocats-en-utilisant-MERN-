import React, { useState } from 'react';
import './Log.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import Validation from './LogVali';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Log = () => {
    const [action, setAction] = useState("Connexion");
    const [values, setValues] = useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

/*const handleButtonClick = () => {
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
       
    };*/
    

  /*  const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            axios.post('http://localhost:8081/sign', values)
                .then(res => {
                    navigate('/reservation');
                })
                .catch(err => console.error(err));
        }
    };*/

    
   /* const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            const endpoint = action === "S'inscrire" ? '/sign' : '/log';
            axios.post(`http://localhost:8081${endpoint}`, values)
                .then(res => {
                    
                        navigate('/reservation');
                  
                })
                .catch(err => console.error(err));
        }
    };*/
 

    const handleLogin = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            // Check if the email and password match the admin credentials
            if (values.email === 'salma@gmail.com' && values.password === 'Salma2002%') {
                navigate('/admin');
            } else {
                axios.post('http://localhost:8081/log', values)
                    .then(res => {
                        console.log('Response from login request:', res); 
                        if (res.data === 'Success') {
                            navigate('/reservation');
                        } else {
                            console.error('Login failed:', res.data);
                        }
                    })
                    .catch(err => console.error(err));
            }
        }
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            if (action === "Connexion") {
                handleLogin(event);
            }
        }
    };
    
    
    
    
    

    return (
        <div className="container1">
            <div className="container2">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
    
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email" onChange={handleInput}name="email"/>
                            {errors.email && (<span className="text-danger">{errors.email}</span>)}
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password"placeholder="Mot de passe" onChange={handleInput} name="password"/>
                            {errors.password && (<span className="text-danger">{errors.password}</span>)}
                        </div>
                    </div>
                    <div className="forgot-password">
                        Mot de passe oublié? <Link to="/forgot"><span>Click ici</span></Link>  
                    </div>
                    <div className="submit-container">
                    <button type="submit" className={action === "Connexion" ? "submit1 gray" : "submit1"} onClick={() => 
                        {setAction("S'inscrire"); 
                            navigate('/sign')
                        }} >S'inscrire</button>
                    <button type="submit"  className={action === "S'inscrire" ? "submit1 gray" : "submit1"}onClick={() => 
                        {setAction("Connexion");
                            navigate('/log')
                        }}>Connexion</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Log;
