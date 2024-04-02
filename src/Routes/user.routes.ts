import {Router,Request,Response} from 'express';
import {handleRequest} from './requestHandler';
import UserController from '../Controller/user.controller';
const userRouter = Router();

userRouter.post('/signin',handleRequest(new UserController().signin));
userRouter.post('/login',handleRequest(new UserController().login));
userRouter.post('/refreshToken',handleRequest(new UserController().refreshToken));
userRouter.post('/logout',handleRequest(new UserController().logout))

export default userRouter;