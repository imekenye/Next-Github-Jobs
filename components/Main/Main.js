import React from 'react';
import Location from '../Location/Location';
import JobList from '../JobsList/JobsList';
import { MainWrapper } from './Main.styled';

const Main = ({ jobs }) => {
  return (
    <MainWrapper>
      <Location />
      <JobList joblist={jobs} />
    </MainWrapper>
  );
};

export default Main;
