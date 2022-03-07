import React, { useEffect, useState } from "react";
import { IPhone } from "../interfaces/phones";
import { getPhone, deletePhone } from "../services/phone.service";

const useDetail = (id: string, goToHome: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPhone>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getDetailPhone();
  }, []);

  const getDetailPhone = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const phone = await getPhone(id);
      setData(phone.phone);
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      debugger;
      setError(err.message);
      setHasError(true);
      setIsLoading(false);
    }
  };

  const onDeletePhone = async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      const phone = await deletePhone(id);
      setIsLoading(false);
      goToHome();
    } catch (error: any) {
      setHasError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    hasError,
    isLoading,
    onDeletePhone,
  };
};

export default useDetail;
