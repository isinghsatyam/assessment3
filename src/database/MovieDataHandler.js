import {movieInfo} from './Schemas';

const Realm = require('realm');

export const addMovieToDatabase = async (movieDetail) =>{
    Realm.open({schema : [movieInfo]})
        .then(realm => {
            realm.write(() =>{
                realm.create('movie_info',{
                    id : realm.objects('movie_info').length + 1,
                    movie_name : movieDetail.moviename,
                    genre : movieDetail.genre,
                    description : movieDetail.description,
                    image_url : movieDetail.imageUrl,
                });
            });
        })
        .catch(error => {
            alert('error')
        })
}

export const getMovieFromDatabase = async () => {
    const realm =new Realm({schema: [movieInfo]});
    var movieDetail = realm.objects('movie_info');
}

export const deleteMovie = async (movieToDelete) =>{
    Realm.open({schema : [movieInfo]})
        .then(realm => {
            realm.write(() =>{
                var name = movieToDelete.moviename;
            if (realm.objects('movie_info').filtered('movie_name =' + name)
                .length > 0) 
                {
                    realm.delete(
                    realm.objects('movie_info').filtered('movie_name =' + name)
                    );
                }
            });
        })
        .catch(error => {
            alert('error')
        })
}

