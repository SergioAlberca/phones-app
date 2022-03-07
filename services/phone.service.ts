import { IPhone, IPhoneList } from "../interfaces/phones";
import { CONSTANTS } from "../utils/constants";

const getPhones = async (): Promise<IPhoneList[]> => {
  const response = await fetch(`${CONSTANTS.BASE_URL}/phones`, {});

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const getPhone = async (id: string): Promise<{ phone: IPhone }> => {
  const response = await fetch(`${CONSTANTS.BASE_URL}/phone/${id}`, {});
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const deletePhone = async (id: string): Promise<{}> => {
  const response = await fetch(`${CONSTANTS.BASE_URL}/phone/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getPhone, getPhones, deletePhone };
