import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import { upload } from "../middlewares/file.middlewares.js";
import { generateInterviewReport, getReporstByUserId, getReportByInterviewId } from "../controllers/interview.controllers.js";

const router = Router ();

router.post ("/generate-report", authMiddleware , upload.single("resume") , generateInterviewReport );
router.get ("/get-reports" , authMiddleware , getReporstByUserId);
router.get("/get-report/:id", authMiddleware , getReportByInterviewId);

export default router;