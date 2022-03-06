import React, { useEffect, useState } from "react";
import { IPhone } from "../interfaces/phones";
import { getPhones } from "../services/phone.service";

const useHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<IPhone>>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getPhones
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    error,
    hasError,
    isLoading,
  };
};

export default useHome;
