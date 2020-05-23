import React, { useState } from 'react';

import './styles.scss';
import Card from './Card';
import Menu from './Menu';
import WordFlow from './WordFlow';
import TextInput from './TextInput';

import useToggle from './useToggle';

const HomePage = () => {
  const [ content, setContent ] = useState(''); 
  const [ toggled, toggle ] = useToggle();

  return (
    <main>
      <header>
        <h1>
          Read Faster
        </h1>
      </header>
      <div className="main">
        { content && (
          <WordFlow content={content} />
        )}

        {!content && (
          <Card>
          { toggled ? <TextInput setContent={setContent} /> : <Menu showTextInput={toggle} /> }
          </Card>
        )}
      </div>
    </main>
  );
};

export default HomePage;
