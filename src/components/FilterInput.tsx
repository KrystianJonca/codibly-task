import React, { useContext } from 'react';
import {
  PaginationContext,
  PaginationContextType,
} from '../context/PaginationContext';

const FilterInput: React.FC = () => {
  const { filterInputValue, filterInputChangeHandler } = useContext(
    PaginationContext
  ) as PaginationContextType;

  return (
    <div className="w-48">
      <label htmlFor="id" className="block text-xl font-medium text-gray-700">
        Filter by ID:
      </label>
      <input
        id="id"
        type="number"
        min="0"
        max="100"
        placeholder="0"
        value={filterInputValue}
        onChange={filterInputChangeHandler}
        className="border border-gray-400 block w-full px-4 py-2 my-2 text-md rounded-md"
      />
    </div>
  );
};

export default FilterInput;
