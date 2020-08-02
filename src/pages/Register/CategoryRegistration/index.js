import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';

function CategoryRegistration() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }

    //State to store the categories
    const [categories, setCategories] = useState([]);
    //State of input values
    const [values, setValues] = useState(initialValues);
    

    function setValue(object, value) {
        setValues({
            ...values,
            [object]: value, //name: 'value'
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCategories([
            ...categories,
            values
        ]);

        setValues(initialValues);
    }

    function handleInputChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
     }

    return (
        <DefaultPage>
            <h1>Cadastrar categoria: {values.name} </h1>

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
                type="text"
                name="description"
                value={values.description}
                onChange={handleInputChange}
            />

            <FormField
                label="Cor"
                type="color"
                name="description"
                value={values.color}
                onChange={handleInputChange}
            />    
                <button>Cadastrar</button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category}${index}`}>
                            {category.name}
                            {category.description}
                            {category.color}
                        </li>
                    );
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </DefaultPage>
    );
} 

export default CategoryRegistration;
