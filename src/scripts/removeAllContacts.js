import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const empty = [];
  fs.writeFile(PATH_DB, JSON.stringify(empty), 'utf-8')
    .then(() => console.log('Done'))
    .catch((error) => console.error(error));
};

removeAllContacts();
