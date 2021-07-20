import './App.css';
import React, { useState, useEffect } from 'react';
import data from '../src/things/data.json'
import JobBoard from './things/components/JobBoard';

function App() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setJobs(data);
  }, [])

  return (
    <div className="App">
      <nav className="flex flex-col my-20  items-center">
        <h1 className="text-center text-4xl font-bold">Search job related to position</h1>
        <form className="my-4">
          <input type="text" className="p-2 shadow-md rounded-xl" placeholder="search.." onChange={event => {
            setSearch(event.target.value)
          }} />
        </form>
      </nav>
      <JobBoard jobs={jobs} search={search} />
    </div>
  );
}

export default App;

