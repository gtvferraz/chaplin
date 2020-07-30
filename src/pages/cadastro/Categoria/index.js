import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(campo, valor) {
    setValues({
      ...values,
      [campo]: valor,
    })
  }

  function handleChange(info) {
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresIniciais);
      }}>
        
        <FormField 
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome} 
        onChange={handleChange}/>

        <div>
          <label>
            Descrição: 
            <textarea type="text" 
            name="descricao"
            value={values.descricao}
            onChange={handleChange}/>
          </label>
        </div>

        <FormField 
        label="Cor"
        type="color"
        name="cor"
        value={values.cor} 
        onChange={handleChange}/>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
          <li key={index}>{categoria.nome}</li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;