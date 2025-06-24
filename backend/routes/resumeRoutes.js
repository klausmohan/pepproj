import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, getUserResumes } from '../controllers/resumeController';

const resumeRouter = express.Router();
resumeRouter.post('/', protect, createResume)
resumeRouter.get('/', protect, getUserResumes)
resumeRouter.get('/:id', protect, 
