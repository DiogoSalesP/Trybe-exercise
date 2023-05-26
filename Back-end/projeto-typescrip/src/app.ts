import express from "express"
import userRouter from './routes/userRoutes'
import {errorHandle} from "./middleware/errorHadler";

const app = express();

app.use(express.json());
app.use('/users', userRouter.route);
app.use(errorHandle);

export default app;
