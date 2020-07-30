import styled from 'styled-components';

const MenuButton = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s; /*Faz a transição da opacidade do botão demore 0.3s*/

  /*Quando o cursor estiver sobre o botão */
  &:hover,
  &:focus {
  opacity: .5;
  }

  @media(max-width: 800px) {
    background : var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    right: 0;
    position: fixed;
    text-align: center;
  }
`;

export default MenuButton;
