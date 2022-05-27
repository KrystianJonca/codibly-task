import React, { useContext } from 'react';
import ProductsList from './ProductsList';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  PaginationContext,
  PaginationContextType,
} from '../context/PaginationContext';

const Pagination: React.FC = () => {
  const {
    currentPage,
    totalPageCount,
    currentProducts,
    nextPageHandler,
    prevPageHandler,
  } = useContext(PaginationContext) as PaginationContextType;

  return (
    <div className="w-full">
      <ProductsList products={currentProducts} />
      <div className="flex justify-between items-center mt-4 w-24">
        <FaArrowLeft
          size="24"
          className={
            currentPage === 1 ? 'text-gray-200' : 'text-black cursor-pointer'
          }
          onClick={prevPageHandler}
        />
        <span>{currentPage}</span>
        <FaArrowRight
          size="24"
          className={
            currentPage === totalPageCount
              ? 'text-gray-200'
              : 'text-black cursor-pointer'
          }
          onClick={nextPageHandler}
        />
      </div>
    </div>
  );
};

export default Pagination;
