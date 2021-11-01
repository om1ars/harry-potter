import axios from "axios";
import { useEffect, useState } from "react";

export const MovieApi = () => {
  const [data, setData] = useState("");
  const fetchedData = async () => {
    fetch('http://example.com/movies.json')
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
