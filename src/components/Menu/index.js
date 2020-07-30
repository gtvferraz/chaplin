import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style';
import MenuButton from './components/MenuButton';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Chaplin logo" />
      </Link>

      <MenuButton as={Link} to="/cadastro/video">
        Novo vídeo
      </MenuButton>
    </MenuWrapper>
  );
}

export default Menu;
