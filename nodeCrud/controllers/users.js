import { v4 as uuid } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuid();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User [${user.firstname}] added to the database.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted on database!!`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) {user.firstname = firstname};
  if (lastname) {user.lastname = lastname};
  if (age) {user.age = age};

  res.send(`User with the id ${id} has been updated`);
};
