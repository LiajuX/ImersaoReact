import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    background-color: var(--black);
    color: var(--white);
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function DefaultPage({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        { children }
      </Main>
      <Footer />
    </>
  );
}

export default DefaultPage;
