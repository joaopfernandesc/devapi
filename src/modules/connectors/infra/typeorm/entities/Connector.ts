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

@Entity('connectors')
class Connector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  name: string;

  @Column()
  @Index()
  type: string;

  @Column()
  @Index()
  privacy: string;

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
