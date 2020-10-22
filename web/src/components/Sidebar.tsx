import React from 'react';
import { FiArrowLeft, FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/local.svg';

import '../styles/components/sidebar.css';

export default function Sidebar({ dashboard = false }) {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      {dashboard && (
        <nav>
          <Link to="" className="active">
            <FiMapPin size={24} color="#FFF" />
          </Link>
          <Link to="">
            <FiAlertCircle size={24} color="#FFF" />
          </Link>
        </nav>
      )}

      <footer>
        {dashboard ? (
          <button type="button" onClick={goBack}>
            <FiPower size={24} color="#FFF" />
          </button>
        ) : (
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        )}
      </footer>
    </aside>
  );
}
