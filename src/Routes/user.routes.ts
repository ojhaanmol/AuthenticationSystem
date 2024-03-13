import {Router,Request,Response} from 'express';
import {handleRequest} from './requestHandler';
import UserController from '../Controller/user.controller';
const userRouter = Router();

// userRouter.post('/',(request:Request,response:Response)=>{
//     console.log(request.body);
//     response.json({Hello:"World"});
// })

userRouter.post('/',handleRequest(async(b,h,p,q)=>{console.log({b,h,p,q});throw 'error'}));
userRouter.post('/signin',handleRequest(new UserController().signin));
userRouter.post('/login',handleRequest(new UserController().login));
userRouter.post('/refreshToken',handleRequest(new UserController().refreshToken))

export default userRouter;