import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import {
  connectorTypes,
  connectorPrivacy,
} from '@modules/connectors/infra/typeorm/entities/Connector';
import ConnectorsController from '../controllers/ConnectorsController';

const connectorsRouter = Router();
const connectorsController = new ConnectorsController();
connectorsRouter.use(ensureAuthenticated);

connectorsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string()
        .valid(...connectorTypes)
        .required(),
      privacy: Joi.string()
        .valid(...connectorPrivacy)
        .required(),
      baseUrl: Joi.string().uri().required(),
      logoUrl: Joi.string().uri().required(),
      category: Joi.string().required(),
      description: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),
  connectorsController.create,
);

connectorsRouter.put(
  '/:connectorID',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string()
        .valid(...connectorTypes)
        .required(),
      privacy: Joi.string()
        .valid(...connectorPrivacy)
        .required(),
      baseUrl: Joi.string().uri().required(),
      logoUrl: Joi.string().uri().required(),
      category: Joi.string().required(),
      description: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),
  connectorsController.update,
);

connectorsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      type: Joi.string().valid(...connectorTypes),
      privacy: Joi.string().valid(...connectorPrivacy),
      category: Joi.string(),
    },
  }),
  connectorsController.index,
);

export default connectorsRouter;
