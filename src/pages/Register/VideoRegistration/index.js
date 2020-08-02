import React from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';

function VideoRegistration() {
  return (
    <DefaultPage>
      <h1>Cadastrar novo vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </DefaultPage>
  );
}

export default VideoRegistration;
