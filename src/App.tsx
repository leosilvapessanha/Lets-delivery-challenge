import React from 'react';
import { GlobalStyle } from './styles/global';

import { Header } from './components/header';
import { Characters } from './components/characters';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Characters />
      <GlobalStyle />
    </>
  );
};
