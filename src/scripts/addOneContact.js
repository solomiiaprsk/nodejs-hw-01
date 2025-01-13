import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const oneContact = createFakeContact();
  await getAllContacts()
    .then((data) => [...data, oneContact])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

addOneContact();
