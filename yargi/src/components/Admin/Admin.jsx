import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Assurez-vous d'avoir ce fichier ou incluez le CSS dans une feuille de style globale

const Admin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8081/admin");
      setUserData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/admin/${id}`);
      // Rafraîchir les données après suppression
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='containerAdm'>
    <div className="Admin-container">
    <div className='tabledata'>
      <div className="bb ">
      <h3>Les informations des réservations</h3>
      </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>phone</th>
            <th>date</th>
            <th>heure</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {userData && userData.map((reservation, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{reservation.nom}</td>
              <td>{reservation.numerotel}</td>
              <td>{reservation.datepicker}</td>
              <td>{reservation.time}</td>
              <td>
                <button className='supprimer' onClick={() => handleDelete(reservation.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default Admin;
