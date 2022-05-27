import React from 'react';
import ProductsList from './ProductsList';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const dummyData = [
  {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
    pantone_value: '15-4020',
  },
  {
    id: 2,
    name: 'fuchsia rose',
    year: 2001,
    color: '#C74375',
    pantone_value: '17-2031',
  },
  {
    id: 3,
    name: 'true red',
    year: 2002,
    color: '#BF1932',
    pantone_value: '19-1664',
  },
  {
    id: 4,
    name: 'aqua sky',
    year: 2003,
    color: '#7BC4C4',
    pantone_value: '14-4811',
  },
  {
    id: 5,
    name: 'tigerlily',
    year: 2004,
    color: '#E2583E',
    pantone_value: '17-1456',
  },
];

const Pagination: React.FC = () => {
  return (
    <div className="w-full">
      <ProductsList products={dummyData} />
      <div className="flex justify-between items-center mt-4 w-16">
        <FaArrowLeft size="24" className="cursor-pointer" />
        <FaArrowRight size="24" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Pagination;
