import axios from "axios";
import { application } from "express";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  timeout: 120000,
});

const logoutUser = () => {
  return apiClient.post("/users/logout");
};

const getLogInUserDetails = () => {
  return apiClient.get("/users/user-info");
};

const refreshToken = () => {
  return apiClient.post("/users/refresh-token");
};

// In change password you should pass old password and new password in body.
const changePassword = ({ oldPassword, newpassword }) => {
  return apiClient.post("/users/change-password", { oldPassword, newpassword });
};

// In update account you only update  email, fullname username only for now.
const updateUserAccount = ({ email, username, fullname }) => {
  return apiClient.post("/users/update-account", { email, username, fullname });
};

// In delete account you should pass password to delete account.
const deleteUserAccount = (password) => {
  return apiClient.post("/users/delete-account", { password });
};

//In update avatar only pass image.
const updateUserAvatar = (avatar) => {
  return apiClient.post("/users/update-avatar", { avatar });
};

// In this pass cover image.
const updateCoverImage = (coverImage) => {
  return apiClient.post("/users/update-coverimage", { coverImage });
};

const getUserChannelDetail = (username) => {
  return apiClient.get(`/users/accounts/channel/${username}`);
};

const getUserProfileDetail = (username) => {
  return apiClient.post(`/users/accounts/profile/${username}`);
};

export {
  logoutUser,
  getUserChannelDetail,
  getUserProfileDetail,
  updateCoverImage,
  updateUserAccount,
  updateUserAvatar,
  deleteUserAccount,
  changePassword,
  refreshToken,
  getLogInUserDetails,
};
