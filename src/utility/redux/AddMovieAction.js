
export const AddMovieAction = (movieInfo) =>({
    type : 'ADD_MOVIE',
    movieInfo :{
        id : movieInfo.id,
        movie_name : movieInfo.movieName,
        genre : movieInfo.genre,
        description : movieInfo.description,
        image_url : movieInfo.imageUrl
    }

})
