import { MigrationInterface, QueryRunner } from 'typeorm';

import Connector from '../../../../modules/connectors/infra/typeorm/entities/Connector';
import ICreateConnectorDTO from '../../../../modules/connectors/dtos/ICreateConnectorDTO';

const data: ICreateConnectorDTO[] = [
  {
    name: 'PUBLIC REST',
    type: 'REST',
    privacy: 'PUBLIC',
    baseUrl: 'http://www.google.com',
    logoUrl: 'http://www.google.com/image',
    category: 'Antifraude',
    status: 'Ativo',
    description: 'Seed connector',
  },
  {
    name: 'PUBLIC SOAP',
    type: 'SOAP',
    privacy: 'PUBLIC',
    baseUrl: 'http://www.yahoo.com',
    logoUrl: 'http://www.yahoo.com/image',
    category: 'Armazenamento',
    status: 'Inativo',
    description: 'Seed connector',
  },
  {
    name: 'PUBLIC BD',
    type: 'BD',
    privacy: 'PUBLIC',
    baseUrl: 'http://www.outlook.com',
    logoUrl: 'http://www.outlook.com/image',
    category: 'Produtividade',
    status: 'Indefinido',
    description: 'Seed connector',
  },
  {
    name: 'PRIVATE REST',
    type: 'REST',
    privacy: 'PRIVATE',
    baseUrl: 'http://www.gmail.com',
    logoUrl: 'http://www.gmail.com/image',
    category: 'Email',
    status: 'Ativo',
    description: 'Seed connector',
  },
];

export default class SeedConnectors1617550066082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Connector, data);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('connectors');
  }
}
