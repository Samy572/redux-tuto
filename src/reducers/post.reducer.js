import { EDIT_POST, ADD_POST, GET_POSTS, DELETE_POST, ADD_POST_LIKE } from '../actions/post.action';

const initialState = {};
export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;

		case ADD_POST:
			// On reprend le state et on ajoute le payload en tant que nouvel element
			return [action.payload, ...state];

		case EDIT_POST:
			return state.map((post) => {
				if (post.id === action.payload.id) {
					return {
						...post,
						content: action.payload.content,
					};
				} else return post;
			});
		case DELETE_POST:
			return state.filter((post) => post.id !== action.payload);
		case ADD_POST_LIKE:
			return state.map((post) => {
				if (post.id === action.payload.id) {
					return {
						...post,
						likes: action.payload.likes,
					};
				} else return post;
			});
		default:
			return state;
	}
}
