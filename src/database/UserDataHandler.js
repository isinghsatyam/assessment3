import {userInfo} from './Schemas';

const Realm = require('realm');

export const addUserToDatabase = async (userDetail) =>{
    Realm.open({schema : [userInfo]})
        .then(realm => {
            realm.write(() =>{
                realm.create('user_info',{
                    user_id : realm.objects('user_info').length + 1,
                    username : userDetail.username,
                    email : userDetail.email,
                    password : userDetail.password,
                    userType : userDetail.userType,
                });
            });
        })
        .catch(error => {
            alert('error')
        })
}

export const deleteUser = async (userDetail) =>{
    Realm.open({schema : [userInfo]})
        .then(realm => {
            realm.write(() =>{
                var ID = this.state.input_user_id;
            if (realm.objects('user_info').filtered('user_id =' + userIdTemp)
                .length > 0) 
                {
                    realm.delete(
                    realm.objects('user_info').filtered('user_id =' + userIdTemp)
                    );
                }
            });
        })
        .catch(error => {
            alert('error')
        })
}


