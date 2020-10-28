import React from 'react';
import { FiEdit3, FiTrash, FiArrowRight } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory, Link } from 'react-router-dom';
import api from '../services/api';

import '../styles/components/orphanageCard.css';
import mapIcon from '../utils/mapIcon';

interface Props {
  orphanage: {
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
  };

  center: [number, number];

  isPending?: boolean;
}

export default function OrphanageCard({
  orphanage,
  center,
  isPending = false,
}: Props) {
  const history = useHistory();

  function handleEdit() {
    console.log('teste');
    history.push(`/dashboard/editar-orfanato/${orphanage.id}`);
  }

  function handleDelete() {
    api.delete(`/orphanages/${orphanage.id}`);
    history.push('/dashboard/orfanatos-cadastrados/excluir');
  }

  return (
    <div id="app-orphanage-card">
      <Map
        center={center}
        zoom={13}
        style={{ width: '100%', height: 277 }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          interactive={false}
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
        />
      </Map>

      <div className="footer">
        <strong>{orphanage.name}</strong>

        <span className="button-block">
          {isPending ? (
            <button onClick={handleEdit}>
              <FiArrowRight size={24} color={'#15C3D6'} />
            </button>
          ) : (
            <>
              <button onClick={handleEdit}>
                <FiEdit3 size={24} color={'#15C3D6'} />
              </button>
              <button onClick={handleDelete}>
                <FiTrash size={24} color={'#15C3D6'} />
              </button>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
