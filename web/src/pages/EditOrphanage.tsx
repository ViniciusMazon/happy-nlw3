import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus, FiXCircle, FiCheck } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/createOrphanage.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import { useHistory } from 'react-router-dom';

interface Params {
  id: string;
}

interface Image {
  id: number;
  url: string;
}

export default function EditOrphanage() {
  const history = useHistory();
  const params = useParams<Params>();

  const [status, setStatus] = useState('registered');
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then((response) => {
      const {
        latitude,
        longitude,
        name,
        about,
        instructions,
        whatsapp,
        opening_hours,
        open_on_weekends,
        images,
        status,
      } = response.data;

      setPosition({ latitude, longitude });
      setStatus(status);
      setImages(images);
      setName(name);
      setAbout(about);
      setInstructions(instructions);
      setWhatsapp(whatsapp);
      setOpeningHours(opening_hours);
      setOpenOnWeekends(open_on_weekends);
      const imagesUrl = images.map((image: Image) => {
        return image.url;
      });
      setPreviewImages(imagesUrl);
    });
  }, [params.id]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();
    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('whatsapp', whatsapp);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('status', status);

    images.forEach((image) => {
      data.append('images', image);
    });

    await api.put(`/orphanages/${params.id}`, data);
    history.push('/dashboard/orfanatos-cadastrados');
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[position.latitude, position.longitude]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                id="whatsapp"
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="images-container">
                {previewImages.map((image) => (
                  <img key={image} src={image} alt={name} />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          {status === 'registered' && (
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          )}
        </form>
        {status !== 'registered' && (
          <footer>
            <button className="confirm-button refuse" type="submit">
              <FiXCircle size={24} color="#fff" style={{ marginRight: 16 }} />
              Recusar
            </button>
            <button className="confirm-button" type="submit">
              <FiCheck size={24} color="#fff" style={{ marginRight: 16 }} />
              Aceitar
            </button>
          </footer>
        )}
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
