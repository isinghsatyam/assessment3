import React ,{ useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StatusBar,
    Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { addMovieToDatabase } from "../database/MovieDataHandler";

const AddMovie = (props) => {

    const [moviename, setMoviename]= useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const onCreateMovie = async () => {
        try{
            if(moviename == null || genre == null || description == null || imageUrl == null )
            {
                alert ('please fill all the details')
            }
            else{
                const createMovie = {  
                    moviename : moviename,
                    genre : genre,
                    description : description,
                    imageUrl : imageUrl,
                }
                console.log(createMovie)
                await addMovieToDatabase(createMovie);
                alert('Movie added');
                props.navigation.navigate('Dashboard');
            }
        }
        catch(error){
            alert(error);
        }
    }

    return (
        <KeyboardAwareScrollView 
        style ={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
            
            <StatusBar backgroundColor='#0BDB8F' barStyle="light-content" />
            <View style ={styles.upperScreen}>
                <TextInput
                        placeholder= "Movie Name"
                        autoCapitalize = 'none'
                        style = {styles.textInput}
                        onChangeText = {moviename => setMoviename(moviename)}
                        
                    />
                <TextInput
                        placeholder= "Genre"
                        autoCapitalize = 'none'
                        style = {styles.textInput}
                        onChangeText = {genre => setGenre(genre)}
                    />
                <TextInput
                        placeholder= "Description"
                        autoCapitalize = 'none'
                        style = {styles.textInput}
                        onChangeText = {description => setDescription(description)}
                    />
                <TextInput
                        placeholder= "Image Link"
                        autoCapitalize = 'none'
                        style = {styles.textInput}
                        onChangeText = {imageUrl => setImageUrl(imageUrl)}
                    />
            </View>
            <View style ={styles.lowerScreen}>
            <TouchableOpacity style={styles.button}
                onPress ={onCreateMovie}
                >
                    <Text style={styles.buttonText}>Add Movie</Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff',
        
    },
    upperScreen :{
        flex: 0.8,
        paddingHorizontal: 25,
        justifyContent : 'center',
        marginTop : 50
    },
    lowerScreen :{
        flex : 0.2,
        justifyContent : 'flex-start',
        paddingHorizontal: 25,
        position : 'relative',
        marginTop : 20
    },
    textInput : {
        marginTop : 20,
        marginBottom : 10,
        paddingLeft: 10,
        color: '#5C5C5C',
        fontSize: 20,
        borderColor : '#0BDB8F',
        borderWidth : 3,
        borderRadius : 10
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        backgroundColor: '#0BDB8F'
      },
      buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5C5C5C'
      },
      picker :{
          height : 40,
          width : 120,
          borderWidth : 2,
          borderColor : '#0BDB8F',
          
      }
});

export default AddMovie;