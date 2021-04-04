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

export enum Privacy {
  PRIVATE,
  PUBLIC,
}

export enum Type {
  REST,
  SOAP,
  BD,
}

@Entity('connectors')
class Connector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  name: string;

  @Column({ type: 'enum', enum: Type })
  @Index()
  type: Type;

  @Column({
    type: 'enum',
    enum: Privacy,
    default: Privacy.PRIVATE,
  })
  @Index()
  privacy: Privacy;

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
