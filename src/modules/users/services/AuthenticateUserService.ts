import { sign } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import authConfig from '@config/auth';

interface IResponse {
  token: string;
}

@injectable()
export default class AuthenticateUserService {
  public async execute(): Promise<IResponse> {
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      expiresIn,
    });

    return { token };
  }
}
