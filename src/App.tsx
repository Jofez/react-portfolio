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
import NotFound from './components/NotFound';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18next';
import { useTranslation } from 'react-i18next';

function App() {



  return (
    <>
    <Router>
      <I18nextProvider i18n={i18n}>

    <Header />
      <div className="App">
          <Routes>
            <Route path="/" element={
              <Home  />
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

            <Route path='*'
              element={<NotFound />}
              />

          </Routes>
        </div>
      
        <Footer />
      </I18nextProvider>
      </Router>
    </>
  );
}

export default App;
