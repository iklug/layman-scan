import { useEffect, useState } from "react";
import { fetchUsers } from "../apiPost";

export const useFetchCards = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUsers();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { data, error };
};
