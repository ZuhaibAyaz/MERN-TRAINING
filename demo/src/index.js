import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Services from './Services';
import Reviews from './Reviews';
import Contact from './Contact';
import './index.css';
import Master from './components/Master';
import {BrowserRouter, Routes, Route,Switch} from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Nav></Nav>
      <Routes>

        <Route path="/" element={ <Master/> } />
       <Route path="/services" element={<Services/>}> </Route>
       <Route path="/reviews" element={<Reviews/>}> </Route>
       <Route path="/contact" element={<Contact/>}> </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

