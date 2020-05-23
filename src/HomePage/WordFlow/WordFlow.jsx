import React, { useState, useEffect, useMemo } from 'react';

import './styles.scss';

const TIME = 250;

const WordFlow = ({
  content,
}) => {
  const words = useMemo(() => {
    return content.split(' ');
  }, [content])

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    setTimeout(() => setCount(count + 1), TIME);
  }, [count])

  return (
    <span className="wordFlow">{words[count]}</span>
  );
};

export default WordFlow;
