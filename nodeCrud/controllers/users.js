import { v4 as uuid } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
  // console.log(`Users name: ${users.firstname}`);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuid();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User [${user.firstname}] added.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) {user.firstname = firstname};
  if (lastname) {user.lastname = lastname};
  if (age) {user.age = age};

  res.send(`User with the id ${id} updated`);
};
// export const updateUser = (req, res)=>{}
// const user = user.find((user) => user.id === id);
// 
// 
// 
