/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

function VideoRegistration() {
  // useHistory to go back home
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitle = categories.map(({ title }) => title);
  const { handleInputChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <DefaultPage>
      <h1>Cadastrar novo vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.category);

        console.log(chosenCategory.id);

        videosRepository.createVideo({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleInputChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleInputChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleInputChange}
          suggestions={categoriesTitle}
        />

        <Button type="submit">Cadastrar</Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </DefaultPage>
  );
}

export default VideoRegistration;
