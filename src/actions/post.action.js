import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST_LIKE = 'ADD_POST_LIKE';

// Creation d'un action pour interragir avec la BDD et le store

export const getPosts = () => {
	return (dispatch) => {
		return axios.get('http://localhost:3000/posts').then((res) => {
			dispatch({ type: GET_POSTS, payload: res.data });
		});
	};
};

export const addPost = (data) => {
	return (dispatch) => {
		return axios.post('http://localhost:3000/posts', data).then(() => {
			dispatch({ type: ADD_POST, payload: data });
		});
	};
};

export const editPost = (data) => {
	return (dispatch) => {
		return axios.put(`http://localhost:3000/posts/${data.id}`, data).then(() => {
			dispatch({ type: EDIT_POST, payload: data });
		});
	};
};

export const deletePost = (postId) => {
	return (dispatch) => {
		return axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
			dispatch({ type: DELETE_POST, payload: postId });
		});
	};
};

export const addPostLike = (data) => {
	return (dispatch) => {
		return axios.put(`http://localhost:3000/posts/${data.id}`, data).then(() => {
			dispatch({ type: ADD_POST_LIKE, payload: data });
		});
	};
};
