import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

const register = ({ username, email, password, fullname, confirmPassword }) => {
  return apiClient.post("/users/register", {
    username,
    email,
    password,
    fullname,
    confirmPassword,
  });
};

const login = ({ email, password }) => {
  return apiClient.post("/users/login", { email, password });
};

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

const getUserAllPost = () => {
  return apiClient.get("/posts");
};

const publishAPost = ({ title, description, PostImgPath }) => {
  return apiClient.post("/posts", { title, description, PostImgPath });
};

const getPostById = (PostId) => {
  return apiClient.get(`/posts/${PostId}`);
};
const deletePost = (PostId) => {
  return apiClient.delete(`/posts/${PostId}`);
};

const updatePost = ({ title, description, postImg }) => {
  return apiClient.patch(`/posts/${PostId}`, { title, description, postImg });
};

const togglePublishStatus = (PostId) => {
  return apiClient.patch(`/posts/toggle/publish/${PostId}`);
};

const getUserFollowingsDetail = (followingId) => {
  return apiClient.get(`/users/accounts/follow/${followingId}`);
};
const userFollowById = (followingId) => {
  return apiClient.post(`/users/accounts/follow/${followingId}`);
};

const togglePostLike = (postId) => {
  return apiClient.post(`/posts/toggle/p/${postId}`);
};

const toggleCommentLike = (commentId) => {
  return apiClient.post(`/posts/toggle/c/${commentId}`);
};

const getLikedPost = () => {
  return apiClient.get(`/posts/user/liked-post`);
};

const getPostComments = (PostId) => {
  return apiClient.get(`/posts/p/c/${PostId}`);
};
const createComment = ({ PostId, content }) => {
  return apiClient.post(`/posts/p/c/${PostId}`, content);
};

const deleteComment = (commentId) => {
  return apiClient.delete(`/posts/c/${commentId}`);
};

const updateComment = ({ commentId, newContent }) => {
  return apiClient.patch(`/posts/c/${commentId}`, newContent);
};

export {
  login,
  register,
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
  getUserAllPost,
  publishAPost,
  getPostById,
  deletePost,
  updatePost,
  togglePublishStatus,
  getUserFollowingsDetail,
  userFollowById,
  togglePostLike,
  toggleCommentLike,
  getLikedPost,
  getPostComments,
  createComment,
  deleteComment,
  updateComment,
};
