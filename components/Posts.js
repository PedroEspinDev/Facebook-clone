import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../public/src/features/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
