import React from 'react';

import './styles.scss';

const Card = ({
  children,
}) => {

  return (
    <div className="card">
      <img alt="bookmark" src="https://img.icons8.com/dusk/64/000000/bookmark-ribbon.png"/>
      {children}
    </div>
  )
};

export default Card;
