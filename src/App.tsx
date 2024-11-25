import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experiences';
import Education from './components/Education';
import UpdateProfile from './components/UpdateProfile';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={
              <Home />
            }
            />
            <Route path="/update-profile" element={
                                              <UpdateProfile />

                                                }
            />
            <Route path='/portfolio'
              element={<Portfolio />}
            />
          <Route path='/experiences'
              element={<Experiences />}
            />
            <Route path='/education'
              element={<Education />}
            />

          </Routes>
        </Router>

      
      </div>
      
        <Footer />




    </>
  );
}

export default App;
