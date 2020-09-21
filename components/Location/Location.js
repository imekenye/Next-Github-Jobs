import React, { useState, useEffect } from 'react';
import CheckBox from '../Checkbox/CheckBox';
import { LocationWrapper } from './Location.styled';

const Location = () => {
  const [checked, setChecked] = useState(false);
  const [location, setLocation] = useState([
    { city: 'London', checked: false },
    { city: 'Amsterdam', checked: false },
    { city: 'New York', checked: false },
    { city: 'Berlin', checked: false },
  ]);

  const handleCheckbox = (i) => {
    // setChecked(!checked);
    location[i].checked = true;
    setLocation([...location]);
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <LocationWrapper>
      <div className="location__fulltime">
        <label>
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
        </label>
        <span style={{ marginLeft: '8px' }}>Full time</span>
      </div>
      <div className="location__search">
        <label for="location"> Location</label>
        <br />
        <input
          type="text"
          name="location"
          placeholder="City, state, zip code or country"
        />
      </div>
      <div className="location__others">
        {location.map(({ city, checked }, i) => (
          <>
            <div className="location__city">
              <label>
                <CheckBox
                  key={city}
                  checked={checked}
                  onChange={() => {
                    location[i].checked = !checked;
                    setLocation([...location]);
                  }}
                />
              </label>
              <span style={{ marginLeft: '8px' }}>{city}</span>
            </div>
          </>
        ))}
      </div>
    </LocationWrapper>
  );
};

export default Location;
