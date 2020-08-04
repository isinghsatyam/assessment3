import {createStore} from 'redux';
import AddMovieReducer from './AddMovieReducer';

const store = createStore(AddMovieReducer);

export default store;