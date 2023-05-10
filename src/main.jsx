import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

// Redux
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import { getPosts } from './actions/post.action';

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

// Dispatch permet de dire ok lance moi telle action

store.dispatch(getPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
	// Le store c'est l'endroit où les données seront stockées
	<Provider store={store}>
		<App />
	</Provider>
);
