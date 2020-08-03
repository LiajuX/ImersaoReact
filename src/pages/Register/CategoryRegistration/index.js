import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

function CategoryRegistration() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleInputChange, values, clearForm } = useForm(initialValues);

  // State to store the categories
  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    clearForm(initialValues);
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categories' : 'https://aluraflix-liajux.herokuapp.com/categories';

    fetch(URL)
      .then(async (serverAnswer) => {
        if (serverAnswer.ok) {
          const answer = await serverAnswer.json();
          setCategories(answer);
          return;
        }
        throw new Error('Não foi possível pegar os dados :(');
      });
  }, []);

  return (
    <DefaultPage>
      <h1>
        Cadastrar nova categoria:
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleInputChange}
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.title}>
            {category.title}
            {category.description}
            {category.color}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </DefaultPage>
  );
}

export default CategoryRegistration;
