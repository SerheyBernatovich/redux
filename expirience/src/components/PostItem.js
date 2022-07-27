import React from 'react';
import { deletePostId } from '../feature/api/postSlice';
import { useDispatch } from 'react-redux';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(deletePostId(post.id))}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {post.title}
    </div>
  );
};

export default PostItem;
