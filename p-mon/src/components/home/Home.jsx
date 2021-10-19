import React from "react";
import useFetch from "../hooks/fetch/useFetch";

export const Home = () => {
  let getUrlFromApi = useFetch();

  console.log(getUrlFromApi);
  return <div>H!!Om!!E {getUrlFromApi.data}</div>;
};

export default Home;
