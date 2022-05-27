import React, { useState, useMemo, createContext } from 'react';
import type { IProduct } from '../components/ProductsList';
import useFetch from '../hooks/useFetch';

const MAX_ITEMS_PER_PAGE = 5;
const FIRST_PAGE = 1;
const API_ENDPOINT = 'https://reqres.in/api/products?per_page=12';

export type PaginationContextType = {
  isLoading: boolean;
  filterInputValue: number;
  filterInputChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  currentProducts: Array<IProduct>;
  currentPage: number;
  totalPageCount: number | undefined;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
};

export const PaginationContext = createContext<PaginationContextType | null>(
  null
);

interface IPaginationContextProviderProps {
  readonly children: React.ReactNode;
}

const PaginationContextProvider: React.FC<IPaginationContextProviderProps> = ({
  children,
}) => {
  const [filterInputValue, setFilterInputValue] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const { data: products, isLoading } = useFetch(API_ENDPOINT);

  const totalPageCount = useMemo(() => {
    if (!isLoading) return Math.ceil(products.length / MAX_ITEMS_PER_PAGE);
  }, [products, isLoading]);

  const currentProducts = useMemo(() => {
    if (filterInputValue) {
      setCurrentPage(1);
      return products.filter(
        (product: { id: number }) => product.id === filterInputValue
      );
    }
    if (!isLoading) {
      const firstIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
      const lastIndex = firstIndex + MAX_ITEMS_PER_PAGE;
      return products.slice(firstIndex, lastIndex);
    }
  }, [currentPage, isLoading, products, filterInputValue]);

  const nextPageHandler = (): void => {
    setCurrentPage((prevState) => {
      if (prevState === totalPageCount) return prevState;
      else return (prevState += 1);
    });
  };

  const prevPageHandler = (): void => {
    setCurrentPage((prevState) => {
      if (prevState === FIRST_PAGE) return prevState;
      else return (prevState -= 1);
    });
  };

  const filterInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterInputValue(Number(event.target.value));
  };

  return (
    <PaginationContext.Provider
      value={{
        isLoading,
        filterInputValue,
        filterInputChangeHandler,
        currentProducts,
        currentPage,
        totalPageCount,
        nextPageHandler,
        prevPageHandler,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
