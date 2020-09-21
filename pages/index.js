import React, { useState } from 'react';

import Layout from '../layout/Layout';
import useFetchJobs from '../hooks/useFetchJobs';
import Search from '../components/Search/Search';
import Main from '../components/Main/Main';

const Home = ({ jobs }) => {
  const [job, setJobs] = useState(jobs);
  return (
    <Layout>
      {/* {loading && <h1>Loading...</h1>}
      {error && <h1>Error.Try Refreshing.</h1>}
      <h1>{jobs.length}</h1> */}
      <h1 style={{ padding: '32px 0' }}>
        Github <span style={{ fontWeight: 100 }}>Jobs</span>
      </h1>
      <Search />
      <Main jobs={job} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('https://jobs.github.com/positions.json');
  const data = await res.json();
  const jobs = data.filter((val, i) => i < 5);
  return {
    props: {
      jobs,
    },
  };
}
