import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>La justice est l'âme d'une société civilisée. Avec dévouement et expertise, nous défendons vos droits et vos intérêts. Votre confiance est notre engagement.</h1>
        <p>Yargi - Votre voix dans la quête de justice. Situé à Agadir, notre cabinet d'avocats s'engage à défendre vos droits avec détermination, expertise et intégrité. Nous sommes là pour vous guider à travers les méandres du système juridique, vous offrant une représentation efficace et personnalisée à chaque étape de votre parcours juridique.</p>
        <button className="btn">
          <Link to="/sign">Réservez maintenant <img src={dark_arrow} alt="" /></Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
