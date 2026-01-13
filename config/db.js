import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

// const {
//   DB_HOST,
//   DB_PORT,
//   DB_USER,
//   DB_PASSWORD,
//   DB_NAME,
// } = process.env;

// const pool = mysql.createPool({
//   host: DB_HOST,
//   port: Number(DB_PORT),
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,

//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// (async () => {
//   try {
//     const conn = await pool.getConnection();
//     console.log("✅ Database connected");
//     conn.release();
//   } catch (err) {
//     console.error("❌ Database connection failed:", err.message);
//   }
// })();

// export default pool;
