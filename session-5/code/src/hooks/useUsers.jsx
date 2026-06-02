import { useState, useEffect } from "react";
import { getUsers } from "../api/userApi";

// custom hook: to do api call and return api data
export const useUsers = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getUsers();
      console.log(response);
      setApiData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { apiData, loading };
};
