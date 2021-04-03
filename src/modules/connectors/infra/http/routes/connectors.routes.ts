import { Router } from 'express';
import ConnectorsController from '../controllers/ConnectorsController';

const connectorsRouter = Router();
const connectorsController = new ConnectorsController();

connectorsRouter.post('/', connectorsController.create);

export default connectorsRouter;
