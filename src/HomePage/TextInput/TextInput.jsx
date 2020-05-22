import React, { useRef } from 'react';

const TextInput = ({
  setContent,
}) => {
  const ref = useRef();

  const onSubmit = () => {
    setContent(ref.current.value);
  };

  return (
    <>
      <textarea
        ref={ref}
        rows="2"
      />
      <button onClick={onSubmit} >
        submit
      </button>
    </>
  )
};

export default TextInput;
