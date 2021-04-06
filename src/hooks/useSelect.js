import React, { useState } from 'react';

const useSelect = (stateInitial, options) => {
  const [state, setState] = useState(stateInitial);

  const Select = () => (
    <div className="input-field col s12">
      <select
        className="browser-default"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
  return [state, Select];
};

export default useSelect;
