import express from "express";

const adminRouter = express.Router();

import { admin, year, teacherlist, yearlist } from "../controllers/admin.js";

adminRouter.post("/teacher", admin);
adminRouter.post("/year", year);
adminRouter.get('/teacherlist',teacherlist);
adminRouter.get('/yearlist', yearlist);



export default adminRouter;