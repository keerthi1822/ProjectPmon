import { useEffect, useState } from "react";
import axios from "axios";

function useFetch() {
  const uri1 = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [data, setData] = useState([]);
  console.log(uri1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(uri1);
        console.log(result, ":::result");
        setData(result.data);
      } catch (error) {
        console.log("error occured::", error);
      }
    };

    fetchData();
  }, [data]);

  return data;
}
export default useFetch;
