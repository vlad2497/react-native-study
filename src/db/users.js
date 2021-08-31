import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.testDb");

export const createUsersTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, image TEXT)"
    );
  });
};

export const getUsers = (setUsers) => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM users", null, (txObj, { rows: { _array } }) =>
      setUsers(_array)
    );
  });
};

export const createUser = (name, image) => {
  db.transaction((tx) => {
    tx.executeSql("INSERT INTO users (name, image) values (?, ?)", [
      name,
      image,
    ]);
  });
};

export const updateUser = (id, image) => {
  db.transaction((tx) => {
    tx.executeSql(`UPDATE users SET image = '${image}' WHERE id = ?`, [id]);
  });
};
