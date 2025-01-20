import React, { useState } from 'react';
import './Sign.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import Validation from './SignVali';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Sign = () => {
    const [action, setAction] = useState("S'inscrire");
    const [values, setValues] = useState({
        name:'',
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
    const handleRegister = (event) => {
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
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key] === "")) {
            if (action === "S'inscrire") {
                handleRegister(event);
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
                    <div className="inputs">{action === "Connexion" ? (<div></div>) : (
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text"placeholder="Nom Complet" onChange={handleInput}name="name"/>
                            {errors.name && (<span className="text-danger">{errors.name}</span>)}
                        </div>
                    )}
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
                        Mot de passe oublié? <span>Click ici</span>
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

export default Sign;
