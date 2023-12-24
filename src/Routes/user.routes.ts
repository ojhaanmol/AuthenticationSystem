import {Router,Request,Response} from 'express';

const userRouter = Router();

userRouter.post('/',(request:Request,response:Response)=>{
    console.log(request.body);
    response.json({Hello:"World"});
    
})

export default userRouter;