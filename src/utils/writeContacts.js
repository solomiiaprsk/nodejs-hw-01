import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Дані успішно записані у файл!');
  } catch (err) {
    console.error('Помилка запису у файл:', err.message);
    throw err;
  }
};
