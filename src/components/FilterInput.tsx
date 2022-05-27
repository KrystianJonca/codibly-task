import React from 'react';

const FilterInput: React.FC = () => {
  return (
    <div className="w-48">
      <label htmlFor="id" className="block text-xl font-medium text-gray-700">
        Filter by ID:
      </label>
      <input
        id="id"
        type="number"
        min="0"
        max="15"
        placeholder="0"
        className="border border-gray-400 block w-full px-4 py-2 my-2 text-md rounded-md"
      />
    </div>
  );
};

export default FilterInput;
