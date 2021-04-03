import { Router } from 'express';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import connectorsRouter from '@modules/connectors/infra/http/routes/connectors.routes';

const routes = Router();

routes.use('/connectors', connectorsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
