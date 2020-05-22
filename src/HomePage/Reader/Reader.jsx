import React, { useState, useEffect, useMemo } from 'react';

const TIME = 250;

const Reader = ({
  content,
}) => {
  const words = useMemo(() => {
    return content.split(' ');
  }, [content])

  const [ count, setCount ] = useState(0);
  const [ word, setWord ] = useState('');

  const getNextWord = () => {
    setCount(count + 1);
    setWord(words[count]);
  };

  useEffect(() => {
    setTimeout(getNextWord, TIME);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <span>{word}</span>
  );
};

export default Reader;
