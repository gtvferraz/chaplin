import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../components/hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../components/repositories/videos';
import categoriasRepository from '../../../components/repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const {handleChange, values} = useForm({
    titulo: 'Padrão',
    url: 'https://www.youtube.com/watch?v=rNciXGzYZms',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository.getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  console.log(categoryTitles);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(evento) => {
        evento.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou');
            history.push('/');
          })
      }}>
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;