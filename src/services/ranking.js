import axios from "axios";
import { useEffect, useState } from "react";

export default function useRanking() {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/ranking`;
    axios
      .get(url)
      .then((res) => {
        setRanking(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return ranking;
}
