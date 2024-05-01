import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: ["Get", "POST"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import userRoutes from "./routes/users.route.js";
import userFollowers from "./routes/followers.routes.js";
import userPost from "./routes/posts.route.js";

app.use("/api/v1/users", userRoutes, userFollowers);
app.use("/api/v1/posts", userPost);
export { app };
