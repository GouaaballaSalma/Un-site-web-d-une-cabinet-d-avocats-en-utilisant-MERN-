import React, { useEffect,useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky,setSticky]= useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const[mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky?'dark-nav' : ' '}`} >
      <img src={logo} alt="" className='logo'/>  
      <ul className={mobileMenu?'':'h-mobile-menu'}>
        <li><Link to='hero container'smooth={true} offset={0} duration={500}>ACCUEIL</Link></li>
        <li><Link to='about'smooth={true} offset={-130} duration={500}>SPECIALITES</Link></li> 
        <li><Link to='avocats'smooth={true} offset={-260} duration={400}>NOS LIVRES</Link></li>
        <li><Link to='Associes 'smooth={true} offset={-260} duration={500}>LES AVOCATS</Link></li>
        <li><Link to='contact 'smooth={true} offset={-260} duration={500} className='btn'>CONTACT</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
