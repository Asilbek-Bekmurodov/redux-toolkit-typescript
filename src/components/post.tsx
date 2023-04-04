import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../store/services/postService";

interface PostProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const Post: React.FC<PostProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div onClick={handleUpdate} style={{ fontSize: "16px" }}>
      {post.id} - {post.title}
      <button onClick={handleRemove}>delete</button>
    </div>
  );
};

export default Post;
