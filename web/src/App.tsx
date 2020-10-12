import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';
import logoimg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mudno</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Barreiras</strong>
          <span>Bahia</span>
        </div>

        <a href="//#region " className="enter-app">
          <FiArrowRight size={32} color="#8D734B" />
        </a>
      </div>
    </div>
  );
}

export default App;
