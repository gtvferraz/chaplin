import React from 'react';

function ButtonLink(props) {
  //props => { className: "", href: ""} vai pegar o className e o href de onde chamar
  console.log(props);
  return (
    <a href="/" className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;