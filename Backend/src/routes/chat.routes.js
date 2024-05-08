import { UserAuthentication } from "../middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router.use(UserAuthentication);

router.route("/").get();
router.route("/users").get();
router.route("/chats/:receiverId").post();

router.route("/group").post();
router.route("/group/:chatId").get().post().patch().delete();

router.route("/group/:chatId/:participantId").post().delete();

router.route("/leave/group/:chatId").delete();

router.route("/remove/:chatId").delete();

export default router;
