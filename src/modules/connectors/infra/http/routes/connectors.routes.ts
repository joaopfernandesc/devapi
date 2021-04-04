import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ConnectorsController from '../controllers/ConnectorsController';

const connectorsRouter = Router();
const connectorsController = new ConnectorsController();
connectorsRouter.use(ensureAuthenticated);

connectorsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string().valid('REST', 'SOAP', 'BD').required(),
      privacy: Joi.string().valid('PUBLIC', 'PRIVATE').required(),
      baseUrl: Joi.string().uri().required(),
      logoUrl: Joi.string().uri().required(),
      category: Joi.string().required(),
      description: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),
  connectorsController.create,
);

export default connectorsRouter;
