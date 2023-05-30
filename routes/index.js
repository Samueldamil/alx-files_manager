import {
  Router,
} from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

// check status and stats of db
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

export default router
