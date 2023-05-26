import { Router } from "express";
import UserController from '../controllers/UserContreller';


const router = Router();
const userController = new UserController();

router
  .route('/users')
  .get(userController.getAll)
  .post(userController.create)

router
  .route('/users/:id')
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.remove)


router
  .route('/login')
  .get(userController.login)

export default router;
