import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a7c86a37-2f38-4c7f-8171-32989fbd904e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envoyez-nous un message <img src={msg_icon} alt="" /></h3>
        <p>Si vous avez des questions juridiques, des préoccupations ou si vous souhaitez prendre rendez-vous avec l'un de nos avocats, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais. Votre satisfaction et la résolution de vos problèmes juridiques sont notre priorité.</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Yargi@gmail.com</li>
            <li><img src={phone_icon} alt="" />0528245679</li>
            <li><img src={location_icon} alt="" />77 Hay Salam,Agadir<br/>MA 5789, MAROC</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label > Votre Nom Complet</label>
            <input type="text"  name='name' placeholder='Entrez votre nom' required/>
            <label >Numéro de téléphone </label>
            <input type="tel"  name='phone' placeholder='Entrez votre numéro de téléphone ' required/>
            <label >Écrivez votre message ici </label>
            <textarea name="message"  rows="6" placeholder='Entrez votre message' required></textarea>
            <button type='submit' className='btn dark-btn' >Envoyer <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
