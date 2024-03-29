import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Put to db');
  // creates connection to db, version 1
  const jateDb = await openDB('jate', 1);
  // create transaction, define db and privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // open object store
  const store = tx.objectStore('jate');
  const request = store.put({ value: content })
  const result = await request;

}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Get all from db');
  // creates connection to db, version 1
  const jateDb = await openDB('jate', 1);
  // create transaction, define db and privileges
  const tx = jateDb.transaction('jate', 'readonly');
  // open object store
  const store = tx.objectStore('jate');
  // get all data from db
  const request = store.getAll();
  // get confirmation
  const result = await request;
  console.log('request.value', result)

}

initdb();
