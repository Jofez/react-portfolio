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
    <Router>
    <Header />
      <div className="App">
          <Routes>
            <Route path="/" element={
              <Home />
            }
            />
            {/* Wip
            <Route path="/update-profile" element={
                                              <UpdateProfile />

                                                }
            /> */}
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
        </div>
      
        <Footer />
      </Router>
    </>
  );
}

export default App;
