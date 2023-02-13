import React from 'react';
import './styles/Title.css';

function PageTitle(props) {
  return (
<div>
      <header className="title">
      <h2>{props.title}</h2>
      </header>
    </div>
  );
}

export default PageTitle;