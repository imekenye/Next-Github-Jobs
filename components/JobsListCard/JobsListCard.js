import React from 'react';
import { JobsListCardWrapper } from './JobsListCard.styled';

import { IconContext } from 'react-icons';
import { FiGlobe, FiClock } from 'react-icons/fi';
import moment from 'moment';
import Moment from 'react-moment';

const JobsListCard = ({ type, company, location, title, time, logo }) => {
  return (
    <JobsListCardWrapper logo={logo}>
      <div className="job__image"></div>
      <div style={{ width: '100%', height: '100%', paddingLeft: '16px' }}>
        <h6 className="job__company">{company}</h6>
        <h1 className="job__title">{title}</h1>
        <div className="job__type">{type}</div>
      </div>

      <div className="job__right">
        <div className="job__location">
          <IconContext.Provider
            value={{
              color: '#B9BDCF',
              size: 16,
              className: 'icon-location',
              style: { marginRight: '8px' },
            }}
          >
            <FiGlobe />
            <p>{location}</p>
          </IconContext.Provider>
        </div>
        <div className="job__time">
          <IconContext.Provider
            value={{
              className: 'icon-time',
              color: '#B9BDCF',
              size: 16,
              style: { marginRight: '8px' },
            }}
          >
            <FiClock />
            <p>
              <Moment fromNow>{time}</Moment>
            </p>
          </IconContext.Provider>
        </div>
      </div>
    </JobsListCardWrapper>
  );
};

export default JobsListCard;
