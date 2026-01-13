// import db from "../config/db.js"; 
import admin from "../models/admin.model.js";


const adminController = {
    postFunc: async (req, res) => {
        // const conn = await db.getConnection(); เชื่อต่อ
    try {
        admin.insert(req.body, conn); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
},
    getFunc: async (req, res) => {
        // const conn = await db.getConnection(); เชื่อต่อ
    try {
        const result = await admin.findByUserId(req.params.id, conn); 
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
};
export default adminController;