import { Router } from "express";
import {
  getLikedVideos,
  toggleCommentLike,
  toggleVideoLike,
} from "../controllers/like.controller.js";
import { UserAuthentication } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(UserAuthentication); // Apply verifyJWT middleware to all routes in this file

router.route("/toggle/p/:postId").post(toggleVideoLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/post").get(getLikedVideos);

export default router;
