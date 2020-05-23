import { useState } from 'react';

const useToggle = (initialState: false) => {
  const [ toggled, setToggled ] = useState(initialState);

  const toggle = () => {
    setToggled(!toggled);
  };

  return [ toggled, toggle ];
};

export default useToggle;
