import axios from "axios";
import { useEffect, useState } from "react";

export const MovieApi = () => {
  const fetchedData = async () => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=ad3f637b457c311591854543d75213c2')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return <div></div>;
};
