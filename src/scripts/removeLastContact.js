import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  return await getAllContacts()
    .then((data) => {
      console.log(data);
      if (data.length >= 1) {
        const arr = data.slice(0, -1);
        console.log(arr);
        return arr;
      }
    })
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

removeLastContact();
