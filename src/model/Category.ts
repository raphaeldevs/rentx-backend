import { v4 as uuid } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }) {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    Object.assign(this, { name, description });
  }
}

export default Category;
