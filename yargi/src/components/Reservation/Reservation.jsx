import React, { useState } from 'react';
import './Reservation.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../assets/datepicker2.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    nom: '',
    numerotel: '',
    datepicker: '',
    time: ''
  });
  const [reservationStored, setReservationStored] = useState(false);
  const navigate = useNavigate(); 
  function showAlert(){
    Swal.fire({
      title: 'Succès!',
      text: 'Réservation enregistrée avec succès!',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
       
    });
  };
/*
  const handlereservation = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/reservation', formData)
      .then(res => {
        console.log('reservation:', res);
        navigate('/reservation');
      })
      .catch(err => console.error(err));
  };*/

  const handlereservation = (event) => {
    event.preventDefault();
     const formattedDate = selectedDate.toLocaleDateString('fr-FR'); 
    const formDataWithDate = {
      ...formData,
      datepicker: formattedDate
    };
  
    axios.post('http://localhost:8081/reservation', formDataWithDate)
      .then(res => {
        console.log('reservation:', res);
        navigate('/reservation');
        showAlert();
       navigate('/');
      })
      .catch(err => console.error(err));
  };
  

  return (
    <div className='containerRes'>
      <div className="reservation-container">
        <div className="form-container">
         
          <div className="titleR">Réserver maintenant</div>
          <form action="" onSubmit={handlereservation}>
            <div className="input-container">
              <input
                type="text"
                name="nom"
                placeholder="Nom Complet"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="numerotel"
                placeholder="Numéro de téléphone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <img src={calendarIcon} alt="" className='calendar-icon' />
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd-MM-yyyy'
                minDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                showYearDropdown
                scrollableMonthYearDropdown
                required
                name="datepicker"
              />
            </div>
            <div className="input-container">
              <input
                type="time"
                name="time"
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="submit1 submitres" >Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
