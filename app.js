import express from 'express';
const app = express();
import adminRoutes from './routes/admin.routes.js';

app.use(express.json());
app.use('/api', adminRoutes);
// import db from "./config/db.js"; expot มาเพื่อเชื่อมต่อ database


export default app;