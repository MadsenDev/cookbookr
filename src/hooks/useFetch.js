import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // track if the component is mounted

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url, options);
        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // cleanup if the component unmounts
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;