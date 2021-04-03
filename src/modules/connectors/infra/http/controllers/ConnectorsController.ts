import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateConnectorService from '@modules/connectors/services/CreateConnectorService';

export default class ConnectorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createConnector = container.resolve(CreateConnectorService);

    const connector = await createConnector.execute(request.body);

    return response.json({ connector });
  }
}
