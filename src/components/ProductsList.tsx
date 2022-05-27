import React from 'react';
import Product from './Product';

export interface IProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

interface IProductsListProps {
  products?: Array<IProduct>;
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-bold my-4">Products</h2>
      <ul className="border border-gray-400 h-[266px]">
        <li className="p-2 text-lg flex justify-between items-center">
          <span>ID. Name</span>
          <span>Year</span>
        </li>
        {products?.length ? (
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              year={product.year}
              color={product.color}
            />
          ))
        ) : (
          <li className="text-lg m-2 font-bold text-center">
            Product not found :(
          </li>
        )}
      </ul>
    </div>
  );
};

export default React.memo(ProductsList);
