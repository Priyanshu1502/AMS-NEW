// Import necessary modules and utilities
import axios from "axios";

// Create an Axios instance for API requests
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
  timeout: 120000,
});

// API functions for different actions
const loginUser = ({ username, email, password}) => {
  return apiClient.post("/users/login", username, password ,email);
};

const registerUser = ({
  email ,
  password,
  username
}) => {
  return apiClient.post("/users/register", email,password,username);
};

const logoutUser = () => {
  return apiClient.post("/users/logout");
};

const getAvailableUsers = () => {
  return apiClient.get("/chat-app/chats/users");
};

const getUserChats = () => {
  return apiClient.get(`/chat-app/chats`);
};

const createUserChat = (receiverId) => {
  return apiClient.post(`/chat-app/chats/c/${receiverId}`);
}