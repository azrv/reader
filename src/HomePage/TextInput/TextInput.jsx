import React, { useRef } from 'react';

import './styles.scss'

const TextInput = ({
  setContent,
}) => {
  const ref = useRef();

  const onSubmit = () => {
    setContent(ref.current.value);
  };

  return (
    <div className="textInputContainer">
      <textarea
        className="textarea"
        ref={ref}
        rows="5"
      />
      <div className="submitButtonContainer">
        <button
          className="submitButton"
          onClick={onSubmit} 
        >
          submit
        </button>
      </div>
    </div>
  )
};

export default TextInput;
