export const userInfo = {
    name : 'user_info',
    primaryKey : 'user_id',
    properties : {
        user_id : 'int' ,
        username : 'string',
        email : 'string',
        password : 'string',
        userType : 'string',
    }
}

export const movieInfo = {
    name : 'movie_info',
    primaryKey : 'id',
    properties : {
        id : 'int',
        movie_name : 'string',
        genre : 'string',
        description : 'string',
        image_url : 'string'   
    }
}