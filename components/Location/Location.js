import React, { useState, useEffect, useReducer } from 'react';
import CheckBox from '../Checkbox/CheckBox';
import { LocationWrapper } from './Location.styled';

import { FiGlobe } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useChecked } from '../../hooks/useChecked';

// import { reducer } from '../../hooks/useChecked';

const Location = () => {
  const [checked, setChecked] = useState(false);
  const [labels, setLabel] = useState([
    { id: 1, label: 'London', checked: false },
    { id: 2, label: 'Amsterdam', checked: false },
    { id: 3, label: 'New York', checked: false },
    { id: 4, label: 'Berlin', checked: false },
  ]);

  return (
    <LocationWrapper>
      <div className="location__fulltime">
        <label>
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
        </label>
        <span style={{ marginLeft: '8px', color: '#334680' }}>Full time</span>
      </div>
      <div className="location__search">
        <label for="location"> Location</label>
        <br />
        <input
          type="text"
          name="location"
          placeholder="City, state, zip code or country"
        />
        <IconContext.Provider
          value={{ color: '#B9BDCF', size: 20, className: 'globe' }}
        >
          <FiGlobe />
        </IconContext.Provider>
      </div>
      <div className="location__others">
        {labels.map(({ label, checked, id }, i) => (
          <>
            <div className="location__city" style={{ marginBottom: '16px' }}>
              <label>
                <CheckBox
                  key={id}
                  checked={checked}
                  onChange={() => {
                    labels[i].checked = !checked;
                    setLabel([...labels]);
                  }}
                />
              </label>
              <span style={{ marginLeft: '8px', color: '#334680' }}>
                {label}
              </span>
            </div>
          </>
        ))}
      </div>
    </LocationWrapper>
  );
};

export default Location;
