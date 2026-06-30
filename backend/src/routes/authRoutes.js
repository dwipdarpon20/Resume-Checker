import express from "express";
import { login, logOut, register ,getMe} from "../controllers/authControllers.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post ('/signup', register);
router.post('/login', login);
router.get('/logout', logOut);
router.get('/get-me', authMiddleware, getMe);

export default router;