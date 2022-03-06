import React, { useEffect, useState } from "react";
import { IPhone } from "../interfaces/phones";
import { getPhone } from "../services/phone.service";

const useDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPhone>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getPhone(id)
      .then((data) => {
        setData(data.phone);
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

export default useDetail;
