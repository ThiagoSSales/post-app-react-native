import {SET_POSTS, ADD_LIKED, CREATING_POST, POST_CREATED} from './actionTypes';
import axios from 'axios';
import RealmService from '~/services/realm';
import api from '~/services/api';

const RestRealm = new RealmService();

export const addPost = (post) => {
  return (dispatch, getState) => {
    const data = {
      id: post.id,
      title: post.title,
      body: post.body,
      liked: post.liked ? post.liked : '',
    };

    dispatch(setPosts(post));
    dispatch(fetchPosts());
    dispatch(postCreated());
  };
};

export const addComment = (payload) => {
  return (dispatch, getState) => {
    axios
      .get(`/posts/${payload.postId}.json`)
      .catch((err) => {
        dispatch();
      })
      .then((res) => {
        const comments = res.data.comments || [];
        comments.push(payload.comment);
        axios
          .patch(
            `/posts/${payload.postId}.json?auth=${getState().user.token}`,
            {comments},
          )
          .catch((err) => {
            dispatch();
          })
          .then((res) => {
            dispatch(fetchPosts());
          });
      });
  };
};

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    api.get('/posts').then((res) => {
      const rawPosts = res.data.slice(0, 10);
      const posts = [];
      for (let key in rawPosts) {
        posts.push({
          ...rawPosts[key],
          id: key,
        });
      }
      console.log('x');
      dispatch(setPosts(posts));
    });
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
