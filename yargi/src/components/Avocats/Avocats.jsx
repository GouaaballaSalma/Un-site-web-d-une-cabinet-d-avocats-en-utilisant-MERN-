import React from 'react'
import './Avocats.css'
import gallery_1 from '../../assets/loi1.jpg'
import gallery_2 from '../../assets/loi2.jpg'
import gallery_3 from '../../assets/loi4.jpg'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom'

const Avocats = () => {
  return (
    <div className='avocats'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
      </div>
      <button className='btn dark-btn '> 
      <Link to="/book"> Voir plus ici <img src={white_arrow} alt="" /></Link>
     
       </button>
    </div>
  )
}

export default Avocats
