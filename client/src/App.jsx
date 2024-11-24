import React from 'react';
import { Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return(
    <div className="min-h-screen bg-grey-300">
      <Routes>
        <Route path="/" element={<EventPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        
      </Routes>
    </div>
  )
}

export default App;