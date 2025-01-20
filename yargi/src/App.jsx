import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Title from './components/Title/Title';
import Avocats from './components/Avocats/Avocats';
import Associes from './components/Associes/Associes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Video from './components/Video/Video';
import Sign from './components/Sign/Sign'; 
import Reservation from './components/Reservation/Reservation';
import Book from './components/Book/Book';
import Admin from './components/Admin/Admin';
import Log from './components/Log/Log';
import ForgotMD from './components/FogotMD/ForgotMD';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
  
    <Router>
      <div>
        
        <Navbar />
        <Routes>
        
          <Route
            path="/"
            element={
              <>

                <Hero /> 
                <div className="container">  
                  <About setPlayState={setPlayState} />
                  <Title subTitle="La loi et la justice" title="NOS LIVRES" />
                  <Avocats />
                  <Title subTitle="AVOCATS" title="NOS ASSOCIES" />
                  <Associes />
                  
                  <Title subTitle="Contactez-nous" title="PRENEZ CONTACT AVEC NOUS" />
                  <Contact />
                  <Footer />
                </div>
                <Video playState={playState} setPlayState={setPlayState} />

              </>
            }
          />
          <Route path="/sign" element={<Sign />} /> 
          <Route path="/log" element= {<Log />}/>
          <Route path="/forgot" element={<ForgotMD />}/>
          <Route path="/book" element={<Book />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
