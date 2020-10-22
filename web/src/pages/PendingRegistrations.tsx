import React, { useState, useEffect } from 'react';
import api from '../services/api';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import OrphanageCard from '../components/OrphanageCard';

import '../styles/pages/dashboard.css';
import notFoundImage from '../images/ops.svg';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  whatsapp: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    id: number;
    url: string;
  }[];
}

export default function PendingRegistrations() {
  const [orphanages, setOrphanages] = useState([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     setInitialPosition([latitude, longitude]);
  //   });
  // }, []);

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-dashboard">
      <Sidebar dashboard={true} active="pending" />

      <main>
        <Header title={'Cadastros pendentes'} count={orphanages.length} />

        {orphanages.length > 0 ? (
          <div className="orphanage-cards">
            {orphanages.map((orphanage: Orphanage) => {
              return (
                <OrphanageCard
                  key={orphanage.id}
                  orphanage={orphanage}
                  center={initialPosition}
                  isPending={true}
                />
              );
            })}
          </div>
        ) : (
          <div className="not-found">
            <img src={notFoundImage} alt="Nenhum no momento" />
            <h1>Nenhum no momento</h1>
          </div>
        )}
      </main>
    </div>
  );
}
