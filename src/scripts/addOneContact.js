import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const contacts = await getAllContacts();
    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);
    return updatedContacts;
  } catch (err) {
    console.error('Помилка додавання контакту:', err.message);
    throw err;
  }
};

addOneContact();
