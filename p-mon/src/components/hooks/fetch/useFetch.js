import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (uri) => {
  console.log(uri);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(uri);
        /* setData(JSON.stringify(response.data, null, 1)); */
        setData(response.data);
        setLoading(false);
        /* console.log(response); */
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log("error occured::", error);
      }
    };
    fetchData();
  }, [uri]);
  return { data, loading, error };
};

export default useFetch;
