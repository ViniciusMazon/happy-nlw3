import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/messageSuccess.css';
import successImage from '../images/success.svg';

export default function CreateOrphanageSuccess() {
  return (
    <div className="page-message-success confirmation">
      <main>
        <div className="content">
          <h1>Ebaaa!</h1>
          <h2>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </h2>

          <Link className="confirmation-button" to="/mapa-de-orfanatos">
            Voltar para o mapa
          </Link>
        </div>

        <img src={successImage} alt="Cadastro realizado com sucesso" />
      </main>
    </div>
  );
}
