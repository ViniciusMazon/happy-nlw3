import React from 'react';
import { FiArrowLeft, FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/local.svg';

import '../styles/components/sidebar.css';

export default function Sidebar({ dashboard = false, active = 'registered' }) {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      {dashboard && (
        <nav>
          <Link
            to="/dashboard/orfanatos-cadastrados"
            className={active === 'registered' ? 'active' : ''}
          >
            <FiMapPin size={24} color="#FFF" />
          </Link>
          <Link
            to="/dashboard/registros-pendentes"
            className={active === 'pending' ? 'active' : ''}
          >
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
