import { useState, useEffect } from "react";
import env from "react-dotenv";

export const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const baseURL = "https://api.themoviedb.org";
  const apiKey = env.MOVIE_API;
  const url = baseURL + path + apiKey;
  console.log("env")
  console.log(env)

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      console.log(url);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);
  console.log(data);
  return { data, isPending, error };
};
