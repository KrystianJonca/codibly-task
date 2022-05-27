import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) console.error('Response failed');

        const json = await res.json();

        setIsLoading(false);
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
