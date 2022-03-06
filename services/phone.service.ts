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

export { getPhones };
