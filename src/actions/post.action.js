import axios from 'axios';
export const GET_POSTS = "GET_POSTS"

// Creation d'un action pour interragir avec la BDD et le store

export const getPosts = () => {
	return (dispatch) => {
		return axios.get('http://localhost:3000/posts').then((res) => {
			dispatch({type: GET_POSTS, payload: res.data})
		});
	};
};
