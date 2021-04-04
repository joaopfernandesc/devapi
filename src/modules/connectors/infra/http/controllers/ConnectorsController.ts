import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateConnectorService from '@modules/connectors/services/CreateConnectorService';
import UpdateConnectorService from '@modules/connectors/services/UpdateConnectorService';
import ListConnectorsService from '@modules/connectors/services/ListConnectorsService';
import DestroyConnectorService from '@modules/connectors/services/DestroyConnectorService';

export default class ConnectorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createConnector = container.resolve(CreateConnectorService);

    const connector = await createConnector.execute(request.body);
    return response.status(201).json(classToClass(connector));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateConnector = container.resolve(UpdateConnectorService);
    const { connectorID } = request.params;
    const connector = await updateConnector.execute({
      connectorID,
      ...request.body,
    });
    return response.json(classToClass(connector));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexConnectors = container.resolve(ListConnectorsService);
    const connector = await indexConnectors.execute(request.query);
    return response.json(classToClass(connector));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const destroyConnector = container.resolve(DestroyConnectorService);
    const { connectorID } = request.params;
    await destroyConnector.execute({
      connectorID,
      ...request.body,
    });
    return response.status(204).json();
  }
}
