import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/messageSuccess.css';
import successImage from '../images/delete.svg';

export default function DeleteOrphanageSuccess() {
  return (
    <div className="page-message-success delete">
      <main>
        <div className="content">
          <h1>Excluir!</h1>
          <h2>Você tem certeza que quer excluir Orf. Esperança?</h2>

          <Link className="delete-button" to="/dashboard/orfanatos-cadastrados">
            Voltar para o mapa
          </Link>
        </div>

        <img src={successImage} alt="Orfanato excluído com sucesso" />
      </main>
    </div>
  );
}
