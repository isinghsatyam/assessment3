import ADD_MOVIE from '../redux/AddMovieAction';

const initialState = {
    movieInfo :{
        id : '',
        movieName : '',
        genre : '',
        description : '',
        imageUrl : ''  
    }
};

const AddMovieReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_MOVIE' : {
            return {
                ...state,
                movieInfo : action.movieInfo
            }
        }
        default :{
            return state;
        }
        
    }
}

export default AddMovieReducer;