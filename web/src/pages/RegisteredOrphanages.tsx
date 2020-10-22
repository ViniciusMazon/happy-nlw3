import React, { useState, useEffect } from 'react';
import api from '../services/api';

import '../styles/pages/dashboard.css';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import OrphanageCard from '../components/OrphanageCard';

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

export default function RegisteredOrphanages() {
  const [orphanages, setOrphanages] = useState([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-dashboard">
      <Sidebar dashboard={true} />

      <main>
        <Header title={'Orfanatos Cadastrados'} count={orphanages.length} />

        <div className="orphanage-cards">
          {orphanages.map((orphanage: Orphanage) => {
            return (
              <OrphanageCard
                key={orphanage.id}
                orphanage={orphanage}
                center={initialPosition}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
