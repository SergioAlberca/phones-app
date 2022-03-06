import { IPhone } from "../interfaces/phones";
import { CONSTANTS } from "../utils/constants";

const getPhones = new Promise<IPhone[]>((resolve, reject) => {
  fetch(`${CONSTANTS.BASE_URL}/phones`, {})
    .then((data) => {
      const phones = data.json();
      resolve(phones);
    })
    .catch((error) => {
      reject(error);
    });
});

const getPhone = (id: string) => {
  return new Promise<{ phone: IPhone }>((resolve, reject) => {
    fetch(`${CONSTANTS.BASE_URL}/phone/${id}`, {})
      .then((data) => {
        const phone = data.json();
        resolve(phone);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deletePhone = (id: string) => {
  return new Promise<{}>((resolve, reject) => {
    fetch(`${CONSTANTS.BASE_URL}/phone/${id}`, { method: "DELETE" })
      .then(() => {
        resolve({});
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getPhone, getPhones, deletePhone };
