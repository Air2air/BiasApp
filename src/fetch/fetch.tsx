import { useState, useEffect } from "react";

export const FetchData = ({ file }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file, { headers });
        const json = await response.json();
        setData(json);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [file]);

  return { data, loading, error };
};