import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export type ConnectorPrivacy = 'PRIVATE' | 'PUBLIC';
export type ConnectorType = 'REST' | 'SOAP' | 'BD';

export const connectorTypes: ConnectorType[] = ['REST', 'SOAP', 'BD'];
export const connectorPrivacy: ConnectorPrivacy[] = ['PUBLIC', 'PRIVATE'];

@Entity('connectors')
class Connector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  name: string;

  @Column({ type: 'enum', enum: connectorTypes })
  @Index()
  type: ConnectorType;

  @Column({ type: 'enum', enum: connectorPrivacy })
  @Index()
  privacy: ConnectorPrivacy;

  @Column()
  baseUrl: string;

  @Column()
  logoUrl: string;

  @Column()
  @Index()
  category: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @CreateDateColumn()
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn()
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn()
  @Exclude()
  deletedAt: Date;
}

export default Connector;
