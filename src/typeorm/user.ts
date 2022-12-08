import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    name: 'username',
    nullable: false
  })
  username: string;

  @Column({
    name: 'first_name',
    nullable: false
  })
  first_name: string;

  @Column({
    name: 'last_name',
    nullable: true
  })
  last_name: string;

  @Column({
    name: 'email_address',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;
}