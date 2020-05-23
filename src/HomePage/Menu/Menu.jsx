import React from 'react';

import './styles.scss';

const Menu = ({
  showTextInput,
}) => {
  return (
    <ul>
      <li onClick={showTextInput}>
        <img alt="textIcon" src="https://img.icons8.com/dusk/28/000000/t.png"/>Insert Text
      </li>
      <li>
        <img alt="fileUploader" src="https://img.icons8.com/dusk/28/000000/add-file--v2.png"/>Upload File
      </li>
    </ul>
  )
};

export default Menu;
