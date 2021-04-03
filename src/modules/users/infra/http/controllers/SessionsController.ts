import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const authenticateUser = container.resolve(AuthenticateUserService);

    const { token } = await authenticateUser.execute();

    return response.json({ token });
  }
}
