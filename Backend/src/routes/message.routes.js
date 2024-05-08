import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { UserAuthentication } from "../middlewares/auth.middleware";

const router = Router();

router.use(UserAuthentication);

router
  .route("/:chatId")
  .get()
  .post(upload.fields([{ name: "attachments", maxCount: 5 }]));

router.route("/:chatId/:messageId").delete();

export default router;
