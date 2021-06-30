import React from 'react';
import logo from '../../assets/logo@2x.png';
import { ContainerLogo } from './styles';

export const Header: React.FC = () => {
  return (
    <>
      <ContainerLogo>
        <img src={logo} alt="logo Rick and Morty" />
      </ContainerLogo>
    </>
  );
};
