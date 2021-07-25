import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

interface ICategoryConstrutor {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;
}

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt?: Date;

  constructor({
    id = uuid(),
    name,
    description,
    createdAt = new Date(),
  }: ICategoryConstrutor) {
    Object.assign(this, { id, name, description, createdAt });
  }
}

export default Category;
