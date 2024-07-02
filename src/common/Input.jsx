import React from 'react';

function Input({ textArea, label, ...props }) {
  return (
    <div className="formGroup">
      <label hidden>{label}</label>
      {textArea && <textarea {...props}></textarea>}
      {!textArea && <input {...props} />}
    </div>
  );
}

export default Input;
