import Axios from 'axios';
import { CREATING_POST, POST_CREATED, SET_POSTS } from './actionTypes';
import { setMessage } from './message';

export const addPost = (post: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(creatingPost());

    Axios({
      url: 'uploadImage',
      baseURL: 'https://us-central1-lambe-93400.cloudfunctions.net',
      method: 'post',
      data: {
        image: post.image.base64,
      },
    })
      .then((resp) => {
        post.image = resp.data.imageUrl;
        Axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
          .then((res) => {
            dispatch(fetchPosts());
            dispatch(postCreated());
          })
          .catch((_) =>
            dispatch(
              setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado!',
              }),
            ),
          );
      })
      .catch((_) =>
        dispatch(
          setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!',
          }),
        ),
      );
  };
};

export const addComment = (payload: any) => {
  return (dispatch: any, getState: any) => {
    Axios.get(`/posts/${payload.postId}.json`)
      .then((res) => {
        const comments = res.data.comments || [];
        comments.push(payload.comment);
        Axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
          .then((res) => dispatch(fetchPosts()))
          .catch((_) =>
            dispatch(
              setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado!',
              }),
            ),
          );
      })
      .catch((_) =>
        dispatch(
          setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!',
          }),
        ),
      );
  };
};

export const setPosts = (payload: any) => {
  return {
    type: SET_POSTS,
    payload,
  };
};

export const fetchPosts = () => {
  return (dispatch: any) => {
    Axios.get('/posts.json')
      .then((res) => {
        const rawPosts = res.data;
        const posts = [];
        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key,
          });
        }

        dispatch(setPosts(posts.reverse()));
      })
      .catch((_) =>
        dispatch(
          setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado!',
          }),
        ),
      );
  };
};

export const creatingPost = () => {
  return {
    type: CREATING_POST,
  };
};

export const postCreated = () => {
  return {
    type: POST_CREATED,
  };
};
