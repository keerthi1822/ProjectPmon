import { useEffect, useState } from "react";
import axios from "axios";

function useSearchFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        setLoading(true);
        await axios.get(uri).then((data) => {
          const respones = data.data.pokemon.map((item) =>
            axios.get(item.pokemon.url)
          );

          Promise.all(respones).then((fetchedItems) => {
            setLoading(false);
            setData(fetchedItems);
            console.log(fetchedItems);
          });
        });
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log("error occured::", error);
      }
    };

    fetchSearchData();
  }, [uri]);

  return { data, loading, error };
}
export default useSearchFetch;
