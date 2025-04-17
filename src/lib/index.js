import axios from "axios";
import {  useMemo } from "react";

function useAxiosInstance() {
  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
      }),
    []
  );

  return axiosInstance;
}

export default useAxiosInstance;
