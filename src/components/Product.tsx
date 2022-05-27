import React from 'react';
import type { IProduct } from './ProductsList';

interface IProductProps {
  id: IProduct['id'];
  name: IProduct['name'];
  year: IProduct['year'];
  color: IProduct['color'];
}

const Product: React.FC<IProductProps> = ({ id, name, year, color }) => {
  return (
    <li
      className="p-2 text-lg flex justify-between items-center"
      style={{ backgroundColor: color }}
    >
      <span>
        <span className="font-medium">{id}.</span> {name}
      </span>
      <span>{year}</span>
    </li>
  );
};

export default React.memo(Product);
