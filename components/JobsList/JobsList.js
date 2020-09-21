import React from 'react';
import JobListCard from '../JobsListCard/JobsListCard';
import moment from 'moment';

const JobList = ({ joblist }) => {
  return (
    <div>
      {joblist.map((job) => (
        <JobListCard
          key={job.id}
          type={job.type}
          company={job.company}
          location={job.location}
          title={job.title}
          time={job.created_at}
          logo={job.company_logo}
        />
      ))}
    </div>
  );
};

export default JobList;
