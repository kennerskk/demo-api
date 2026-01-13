import { mapToColumns } from "../utils/mapToColumns.js";
import { adminSchema } from "../schemas/admin.schema.js";

const admin = {
    insert: async (data, conn) => {
    const mapped = mapToColumns(data, adminSchema);

    const cols = Object.keys(mapped);
    const values = Object.values(mapped);

    const sql = `
      INSERT INTO table_name (${cols.join(", ")})
      VALUES (${cols.map(() => "?").join(", ")})
    `;
    const [res] = await conn.query(sql, values);
    return res.insertId;
},
findByUserId: async (id, conn) => {
    const sql = `
      SELECT id, name, email, created_at, updated_at
      FROM users
      WHERE id = ?
      LIMIT 1
    `;

    const [rows] = await conn.execute(sql, [id]);
    return rows[0] || null;
  }
}

export default admin;