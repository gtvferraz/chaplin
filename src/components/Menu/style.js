import styled from 'styled-components';

export const LogoImage = styled.img`
  max-width: 168px;

  /*Usa @media quando voce quer fazer uma mudança de estilo apenas numa determinada resolução de tela*/
  /*Quando estiver numa resolução de até 800px de largura, ele executa o bloco abaixo*/
  @media(max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;

  position: fixed; /*Fixa o Menu na tela, assim ele vai continuar aparecendo mesmo se descer a tela*/
  top: 0; /*Para fixar a barra do Menu no topo e na esquerda */
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 100;

  display: flex;
  justify-content: space-between; /*Pega todo o espaço disponível e coloca entre os componentes*/
  align-items: center; /*Organiza na direção oposta que está trabalhando, como estamos organizando na linha, o align-items vai alinhar na vertical*/

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;