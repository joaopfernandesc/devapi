import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export default class CreateConnectors1617481289431
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'connectors',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['REST', 'SOAP', 'BD'],
          },
          {
            name: 'privacy',
            type: 'enum',
            enum: ['PUBLIC', 'PRIVATE'],
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'baseUrl',
            type: 'varchar',
          },
          {
            name: 'logoUrl',
            type: 'varchar',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
          { name: 'updatedAt', type: 'timestamp', default: 'now()' },
          { name: 'deletedAt', type: 'timestamp', isNullable: true },
        ],
      }),
    );
    await queryRunner.createIndex(
      'connectors',
      new TableIndex({
        name: 'IDX_CONNECTOR_NAME',
        columnNames: ['name'],
      }),
    );
    await queryRunner.createIndex(
      'connectors',
      new TableIndex({
        name: 'IDX_CONNECTOR_TYPE',
        columnNames: ['type'],
      }),
    );
    await queryRunner.createIndex(
      'connectors',
      new TableIndex({
        name: 'IDX_CONNECTOR_CATEGORY',
        columnNames: ['category'],
      }),
    );
    await queryRunner.createIndex(
      'connectors',
      new TableIndex({
        name: 'IDX_CONNECTOR_PRIVACY',
        columnNames: ['privacy'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('connectors', 'IDX_CONNECTOR_NAME');
    await queryRunner.dropIndex('connectors', 'IDX_CONNECTOR_TYPE');
    await queryRunner.dropIndex('connectors', 'IDX_CONNECTOR_CATEGORY');
    await queryRunner.dropIndex('connectors', 'IDX_CONNECTOR_PRIVACY');
    await queryRunner.dropTable('connectors');
  }
}
