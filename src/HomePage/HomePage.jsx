import React, { useState } from 'react';

import './styles.css';
import Reader from './Reader';
import TextInput from './TextInput';

const HomePage = () => {
  const [ content, setContent ] = useState(null);
  
  return (
    <div className="main">
      {
        !content && (
          <TextInput setContent={setContent} />
        )
      }
      {
        content && (
          <Reader content={content} />
        )
      }
    </div>
  );
};

export default HomePage;
