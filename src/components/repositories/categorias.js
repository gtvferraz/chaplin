import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`).then(async (respostaDoServer) => {
    if(respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Deu ruim');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async (respostaDoServer) => {
    if(respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Deu ruim');
  });
}

export default {
  getAll,
  getAllWithVideos,
};
