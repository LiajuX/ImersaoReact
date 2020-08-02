import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryRegistration() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  // State to store the categories
  const [categories, setCategories] = useState([]);
  // State of input values
  const [values, setValues] = useState(initialValues);

  function setValue(object, value) {
    setValues({
      ...values,
      [object]: value, // name: 'value'
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    setValues(initialValues);
  }

  function handleInputChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categories' : 'https://aluraflix-liajux.herokuapp.com/categories';

    fetch(URL)
      .then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        setCategories([
          ...answer,
        ]);
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
          name="name"
          value={values.name}
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
          <li key={category.name}>
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
