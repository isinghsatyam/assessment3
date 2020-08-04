import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    Button,
    TouchableOpacity
} from 'react-native';
import { getMovieFromDatabase , deleteMovie } from "../database/MovieDataHandler";
import {movieInfo} from '../database/Schemas';
import Realm from 'realm';

const MovieList = (props) => {
    
    const [isLoading, setLoading] = useState(true);
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
            try{
                const realm =new Realm({schema: [movieInfo]});
                const movieDetail = realm.objects('movie_info');
                setDataset(movieDetail);
                
            }catch(error){
                alert(error);
            }finally{
                setLoading(false);
            }
               
    });

    return (
        
        <View style ={styles.container}>
            <StatusBar backgroundColor='#0BDB8F' barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <View style ={styles.itemPosition}>
                    <ScrollView  horizontal={true}>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>All</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Action</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Horror</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Historic</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Suspense</Text></TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <View style = {styles.lowerScreen}>
            {isLoading ? <ActivityIndicator size='large' color='red' animating/>
            : (
                <FlatList
                    style={styles.lowerScreen}
                    data={dataset}
                    initialNumToRender ={3}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => {
                    return(
                        <View style={styles.flatlist} >
                            <Image source={{uri : item.image_url}} style={styles.flatlistImage}></Image>
                            <Text style={styles.flatlistText}>{item.movie_name}</Text>
                            <Text style={styles.flatlistText}> {item.genre}</Text>
                            <Text style={styles.flatlistText}> {item.description}</Text>
                            <View style={styles.flatlistItemPosition}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Update</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}
                                onPress= {deleteMovie(item)}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        ) 
                    }}
                />
            )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff'
    },
    upperScreen :{
        flex: 0.1,
        justifyContent : 'center',
    },
    lowerScreen :{
        flex : 0.9,
        backgroundColor: '#fff',
        paddingTop : 20,
        paddingHorizontal: 20,
        borderColor: '#000066',
    },
    itemPosition:{
        flexDirection:'row',
        paddingTop: 15,
        paddingBottom: 10,
        // alignSelf : 'center'
      },
      flatlistItemPosition:{
        flexDirection:'row',
        paddingTop: 15,
        paddingBottom: 10,
         alignSelf : 'center'
      },
    flatlist:{
        backgroundColor : '#0BDB8F',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderBottomLeftRadius : 20,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    flatlistText: {
        color: '#106669',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    flatlistImage:{
        alignSelf :  'center',
        height : 70,
        width : 70,
        borderBottomLeftRadius : 30,
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        borderBottomRightRadius : 30
      },
    button: {
        width: '100%',
        height: 30,
        width : 90,
        justifyContent :'center',
        alignItems :'center',
        borderRadius: 10,
        marginHorizontal: 5,
        marginRight : 5,
        backgroundColor : '#ffffff',
        borderColor :'#0BDB8F',
        borderWidth : 2,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#303326',
        textAlign : 'center'
    },
});

export default MovieList;