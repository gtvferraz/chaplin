import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../components/repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  //http://localhost:8080/categorias?_embed=videos

   useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if(indice ===0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              /> 
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          /> 
        )
      })}

    </PageDefault>
  );
}

export default Home;
