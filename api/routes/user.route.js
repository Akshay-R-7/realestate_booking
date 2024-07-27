import express from 'express';
import { test, updataUser, deleteUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test)
router.post('/update/:id',verifyToken ,updataUser)
router.delete('/delete/:id',verifyToken, deleteUser)
router.get('/listings/:id',verifyToken , getUserListings)

export default router