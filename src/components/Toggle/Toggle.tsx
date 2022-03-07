import React from 'react';

import './toggle.css';

interface ToggleProps {
  label: string;
  onClick: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ label, onClick }) => {
  return (
    <div className='container' onClick={onClick}>
      {label}{' '}
      <div className='toggle-switch'>
        <input
          type='checkbox'
          // onCah={onClick}
          className='checkbox'
          name={label}
          id={label}
        />
        <label className='label' htmlFor={label}>
          <span className='inner' />
          <span className='switch' />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
