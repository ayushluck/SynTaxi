import express from "express";
import {
    createSession,
    getActiveSession,
    getMyRecentSessions,
    getSessionById,
    joinSession,
    endSession,
} from "../controllers/sessionController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();
router.use(protectRoute);
router.post("/", createSession);
router.get("/active", getActiveSession);
router.get("/my-recent", getMyRecentSessions);
router.get("/:id", getSessionById);
router.post("/:id/join", joinSession);
router.post("/:id/end", endSession);

export default router;