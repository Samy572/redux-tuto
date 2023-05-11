import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, getPosts } from '../actions/post.action';

// useSelector permet de selectionner les choses dans le store
// useDispatch permet d'envoer des informations dans le store

const PostForm = () => {
	const form = useRef(null);
	const user = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const postData = {
			author: user.pseudo,
			title: form.current[0].value,
			content: form.current[1].value,
			likes: 0,
		};
		// Pour envoyer le formulaire dans le store
		await dispatch(addPost(postData));
		dispatch(getPosts());
		form.current.reset();
	};

	return (
		<div className="form-container">
			<form ref={form} onSubmit={(e) => handleFormSubmit(e)}>
				<input type="text" placeholder="Titre du poste" />
				<textarea placeholder="Postez vos pensées..."></textarea>
				<input type="submit" value="Envoyer" />
			</form>
		</div>
	);
};

export default PostForm;
