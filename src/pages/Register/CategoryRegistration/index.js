import React from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';

function CategoryRegistration() {
    return (
        <DefaultPage>
            <h1>Cadastrar nova categoria</h1>

            <form>
                <label>Nome da categoria</label>

                <input type="text"/>

                <button>Cadastrar</button>
            </form>

            <Link to='/'>
                Ir para home
            </Link>
        </DefaultPage>
    );
} 

export default CategoryRegistration;
