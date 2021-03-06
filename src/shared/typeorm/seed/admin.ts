import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

import { createConnection, getConnection } from "..";

async function create() {
  await createConnection();

  const connection = await getConnection();

  const id = uuid();
  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO users (id, name, email, password, "isAdmin", driver_license, created_at)
    VALUES (
      '${id}',
      'Rapha ADM',
      'admin@rentx.com.br',
      '${password}',
      true,
      '0123456789',
      NOW()
    )
  `);
}

(async () => {
  await create();

  console.log("Admin created! 😎");
})();
