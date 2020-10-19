import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/createOrphanageSuccess.css';
import successImage from '../images/success.svg';

export default function CreateOrphanageSuccess() {
  return (
    <div id="page-create-orphanage-success">
      <main>
        <div className="content">
          <h1>Ebaaa!</h1>
          <h2>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </h2>

          <Link to="/mapa-de-orfanatos">Voltar para o mapa</Link>
        </div>

        <img src={successImage} alt="Cadastro realizado com sucesso" />
      </main>
    </div>
  );
}
