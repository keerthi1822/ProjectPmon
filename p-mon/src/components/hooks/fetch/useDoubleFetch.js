import { useEffect, useState } from "react";
import axios from "axios";

function useDoubleFetch(uri) {
  const [data, setData] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios.get(uri).then((data) => {
          setNext(data.data.next);
          setPrev(data.data.previous);
          const respones = data.data.results.map((item) => axios.get(item.url));

          Promise.all(respones).then((fetchedItems) => {
            setLoading(false);
            setData(fetchedItems);
          });
        });
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log("error occured::", error);
      }
    };

    fetchData();
  }, [uri]);

  return { data, next, loading, error, prev };
}
export default useDoubleFetch;
