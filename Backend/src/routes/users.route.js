import { Router } from "express";
import {
  ChangeCurrentPassword,
  DeleteUserAccount,
  UpdateCoverImage,
  UpdateUserAvatar,
  UpdateUserDetails,
  UserTokenRefreshing,
  getUserChannelDetails,
  getUserDetails,
  userLogIn,
  userLogOut,
  userRegisteration,
  getUserDetailsByUsername,
} from "../controller/users.controller.js";
import { UserAuthentication } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisteration);
router.route("/login").post(userLogIn);
router.route("/logout").post(UserAuthentication, userLogOut);

router.route("/user-info").get(UserAuthentication, getUserDetails);

router.route("/refresh-token").post(UserAuthentication, UserTokenRefreshing);

router
  .route("/change-password")
  .post(UserAuthentication, ChangeCurrentPassword);

router.route("/update-account").post(UserAuthentication, UpdateUserDetails);

router.route("/delete-account").post(UserAuthentication, DeleteUserAccount);

router.route("/update-avatar").post(UserAuthentication, UpdateUserAvatar);

router.route("/update-coverimage").post(UserAuthentication, UpdateCoverImage);

router
  .route("/accounts/channel/:username")
  .get(UserAuthentication, getUserChannelDetails);

router
  .route("/accounts/profile/:username")
  .get(UserAuthentication, getUserDetailsByUsername);

export default router;
