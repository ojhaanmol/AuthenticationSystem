import express,{Request,Response} from 'express';
import cors from 'cors';
import {json} from 'body-parser';
import helmet from 'helmet';

import Routes from '../Routes';

const routes = new Routes

const app = express();

app.use(cors());
app.use(json());
app.use(helmet())

app.use('/user',routes.userRouter);

export default app;