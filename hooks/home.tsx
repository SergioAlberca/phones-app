import { useEffect, useState } from "react";
import { IPhoneList } from "../interfaces/phones";
import { getPhones } from "../services/phone.service";

const useHome = (navigation: any, route: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<IPhoneList>>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getListPhones();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (route?.params?.reload) {
        getListPhones();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const getListPhones = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const phones = await getPhones();
      setData(phones);
      setIsLoading(false);
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
  };
};

export default useHome;
