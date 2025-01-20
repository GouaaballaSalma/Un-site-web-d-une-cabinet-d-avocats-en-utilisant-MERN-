import React, { useEffect,useState} from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const about = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
      <img src={about_img} alt="" className='about-img' />
      <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>

      <div className="about-right">
      <h3>ABOUT YARGI</h3>
      <h2> Cabinet d'avocats</h2>
      <p>Le cabinet d'avocats Yargi est reconnu pour son engagement inébranlable envers la justice et ses clients. Notre équipe d'avocats hautement qualifiés et expérimentés est dévouée à défendre vos droits et vos intérêts avec expertise et professionnalisme.Nous offrons une gamme complète de services juridiques, allant de la consultation initiale à la représentation en justice, en passant par la médiation et la négociation. Que vous soyez confronté à un litige civil, pénal, familial ou commercial, notre cabinet est là pour vous fournir des solutions efficaces et personnalisées.Chez Yargi, nous comprenons l'importance de la confiance que vous nous accordez. C'est pourquoi nous nous engageons à travailler en étroite collaboration avec vous, en vous tenant informé à chaque étape du processus. Votre satisfaction et votre tranquillité d'esprit sont notre priorité absolue.Forts de notre expertise, de notre dévouement et de notre engagement envers nos clients, nous sommes fiers de vous offrir un service juridique de la plus haute qualité.</p>
     
    </div>
      </div>

  )
}

export default about
