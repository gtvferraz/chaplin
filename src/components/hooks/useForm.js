import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(campo, valor) {
    setValues({
      ...values,
      [campo]: valor,
    });
  }

  function handleChange(info) {
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return { values, handleChange, clearForm };
}

export default useForm;
