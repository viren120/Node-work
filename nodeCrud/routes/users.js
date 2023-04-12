import express from 'express';
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);// Read  All data

router.post('/', createUser);// Create data

router.get('/:id', getUser);// Read specific data with id 

router.delete('/:id', deleteUser);// Delete data

router.patch('/:id', updateUser);//Update data

export default router;
