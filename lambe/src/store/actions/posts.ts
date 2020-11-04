import { ADD_COMMENT, ADD_POST } from './actionTypes';

export const addPost = (post: any) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const addComment = (payload: any) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};