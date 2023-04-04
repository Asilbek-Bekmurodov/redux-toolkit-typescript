import React from "react";
import { postAPI } from "../store/services/postService";
import Post from "./post";
import { IPost } from "../models/IPost";

interface PostContainerProps {}

const PostContainer: React.FC<PostContainerProps> = () => {
  const { data: posts, isLoading, isError } = postAPI.useFetchAllPostsQuery(12);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <h1>
      <button onClick={() => handleCreate()}>add post</button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {posts?.map((post, idx) => (
        <Post key={idx} update={updatePost} remove={deletePost} post={post} />
      ))}
    </h1>
  );
};

export default PostContainer;
