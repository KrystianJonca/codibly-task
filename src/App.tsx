import React from 'react';
import FilterInput from './components/FilterInput';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold my-4">
        Codibly Recruitment Task
      </h1>
      <div className="max-w-3xl mx-auto py-4 flex flex-col items-center justify-center">
        <FilterInput />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
