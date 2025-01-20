import React, { useRef } from 'react'
import './Associes.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/program1.webp'
import user_2 from '../../assets/program2.webp'
import user_3 from '../../assets/program4.webp'
import { Link } from 'react-router-dom'

const Associes = () => {
    const slider=useRef();
    let tx=0;

const slideForward=() =>{
    if(tx > -50){
        tx -= 33;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

}
const slideBackward=() =>{
    if(tx < 0){
        tx += 33;
    }
    slider.current.style.transform=`translateX(${tx}%)`; 
}

  return (
    <div className='Associes'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src= {back_icon} alt=""className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                       <img src={user_1} alt="" /> 
                       <div>
                        <h3>Yekta Tilman</h3>
                        <span>Rabat,MAROC</span><br />
                       
                       </div>
                    </div>
                    <p>Yekta Tilman, avocat expérimenté âgé de 50 ans, possède une vaste expertise dans divers domaines du droit. Fort de nombreuses années de pratique, il est reconnu pour sa compétence, son engagement et son dévouement envers ses clients. Spécialisé dans le droit civil, pénal et commercial, Yekta Tilman offre des services juridiques de haute qualité, combinant savoir-faire et professionnalisme pour obtenir les meilleurs résultats pour ses clients</p>
                    <Link to='/log'> <span className='btnRv rdv'>Prendre RDV</span></Link>
                </div>
             </li>

             <li>
                <div className="slide">
                    <div className="user-info">
                       <img src={user_2} alt="" /> 
                       <div>
                        <h3>Geylin erguvan</h3>
                        <span>Agadir,MAROC</span>
                       </div>
                    </div>
                    <p>Ceylin Erguvan, avocate dynamique de 30 ans, est spécialisée dans plusieurs domaines du droit, notamment le droit de la famille, le droit civil et le droit du travail. Forte de son expertise et de son engagement envers ses clients, elle offre des conseils juridiques avisés et une représentation efficace. Passionnée par son métier, Ceylin Erguvan s'efforce toujours d'obtenir les meilleurs résultats pour ses clients, en mettant à profit son savoir-faire et sa compétence juridique.</p>
                    <Link to='/log'> <span className='btnRv rdv'>Prendre RDV</span></Link>
                </div>
             </li>

             <li>
                <div className="slide">
                    <div className="user-info">
                       <img src={user_3} alt="" /> 
                       <div>
                        <h3>ilgaz kaya</h3>
                        <span>Casablanca,MAROC</span>
                       </div>
                    </div>
                    <p>Ilgaz Kaya, avocat expérimenté de 35 ans, est spécialisé dans le droit des affaires. Avec une expertise approfondie dans ce domaine, Ilgaz offre des conseils juridiques stratégiques et une représentation efficace aux entreprises de toutes tailles. Grâce à son expérience et à sa connaissance approfondie du droit des affaires, Ilgaz Kaya aide ses clients à naviguer avec succès dans un environnement juridique complexe, leur permettant ainsi de protéger leurs intérêts et de réaliser leurs objectifs commerciaux.</p>
                    <Link to='/log'> <span className='btnRv rdv'>Prendre RDV</span></Link>
                </div>
             </li>
            

        </ul>
      </div>
    </div>
  )
}

export default Associes
