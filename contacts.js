const fs = require("node:fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");
const { nanoid } = require("nanoid");

async function listContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "utf8" });
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await listContacts();
  const contact = data.find(({ id }) => id === contactId);
  return contact || "null";
}
getContactById("qdggE76Jtbfd9eWJHrssH");
async function removeContact(contactId) {
  const data = await listContacts();
  const contact = data.findIndex(({ id }) => id === contactId);
  if (contact) {
    const [removedContact] = data.splice(contact, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return removedContact;
  } else {
    return null;
  }
}

async function addContact(name, email, phone) {
  const data = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return newContact;
}

module.exports = {
  addContact,
  removeContact,
  getContactById,
  listContacts,
};
