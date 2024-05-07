import mongoose, { Mongoose, isValidObjectId } from "mongoose";
import { PostDB } from "../model/posts.model.js";
import { apiError } from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

//This fetched all the User Post whose LoggedIn.
const getAllPost = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const userPosts = await PostDB.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $project: {
        owner: 0,
      },
    },
  ]);

  res
    .status(200)
    .json(
      new apiResponse(200, "All user Posts fetched successfully.", userPosts)
    );
});

//This is for creates or post a content.
const publishAPost = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const PostImgPath = req?.file?.path;

  if (!(title && description)) {
    throw new apiError(404, "Title and description is required!");
  }

  const publishingPost = await PostDB.create({
    postImg: PostImgPath,
    title,
    owner: req.user._id,
    description,
  });

  const publishedPost = await PostDB.findById(publishingPost._id).select(
    "-owner"
  );
  res
    .status(201)
    .json(
      new apiResponse(200, "The Post is published successfully.", publishedPost)
    );
});

//This fetched all the post by using userId.
const getPostById = asyncHandler(async (req, res) => {
  const { PostId } = req.params;

  const post = await PostDB.findById(PostId);

  if (!post) {
    throw new apiError(404, "Invalid Post ID.");
  }
  res
    .status(200)
    .json(new apiResponse(200, "The Post is fetched successfully.", post));
});

const updatePost = asyncHandler(async (req, res) => {
  const { PostId } = req.params;

  const { title, description } = req?.body;

  const PostImg = req?.file;

  // if (!title || !description) {
  //   throw new apiError(404, "title and description is required!");
  // }

  const newPost = await PostDB.findByIdAndUpdate(
    PostId,
    {
      $set: {
        title: title,
        description: description,
        postImg: PostImg?.path,
      },
    },
    {
      new: true,
    }
  );
  res
    .status(200)
    .json(new apiResponse(200, "The Post is Updated Successfully.", newPost));
});

const deletePost = asyncHandler(async (req, res) => {
  const { PostId } = req.params;

  const Post = await PostDB.findById(PostId);

  if (!Post) {
    throw new apiError(404, "Post Not Found!");
  }

  await Post.deleteOne();
  res
    .status(200)
    .json(new apiResponse(200, "The Post is deleted successfully."));
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { PostId } = req.params;

  const Post = await PostDB.findById(PostId);

  if (!Post) {
    throw new apiError(400, "Post Not Found!");
  }

  if (Post?.owner !== req.user._id) {
    throw new apiError(401, "You are unauthorized for this function!");
  }
  const isPublished = !Post.isPublished;

  Post.updateOne(
    {
      set: {
        isPublished,
      },
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .json(new apiResponse(200, "isPublished Toggled Successfully."));
});

export {
  getAllPost,
  publishAPost,
  getPostById,
  updatePost,
  deletePost,
  togglePublishStatus,
};
