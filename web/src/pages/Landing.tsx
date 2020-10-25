import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoimg from '../images/logo.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Logo Happy" />

        <div className="location">
          <strong>Barreiras</strong>
          <span>Bahia</span>
        </div>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Link to="/dashboard/orfanatos-cadastrados" className="enter-login">
          Acesso restrito
        </Link>

        <Link to="/mapa-de-orfanatos" className="enter-app">
          <FiArrowRight size={32} color="#8D734B" />
        </Link>
      </div>
    </div>
  );
}
