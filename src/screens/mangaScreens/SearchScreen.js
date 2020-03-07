import React, { useState } from 'react'
import {View,Text,StyleSheet, FlatList,TouchableOpacity,ImageBackground} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {Feather} from '@expo/vector-icons'
import ScreenHeader from '../../components/ScreenHeader'
import {SearchBar} from 'react-native-elements'
import mangas from '../../api/mangas.json'
const SearchScreen = ({navigation}) => {

    const [searchResults,setSearchResults] = useState([]);
    const [term,setTerm] = useState('')

    const searchFinalTerm = () => {
        try {
            const result = mangas["manga"].filter(manga => manga.t.toUpperCase().match(term.toUpperCase()))
            setSearchResults(result)
            

            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <SearchBar
            platform="ios"
            containerStyle={{backgroundColor:'#rgba(255,255,255,0)'}}
            placeholder="Search manga..."
            value={term}
            onChangeText={(newTerm) => {setTerm(newTerm)}}
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            keyboardAppearance='dark'
            autoFocus={true}
            onCancel={() => {setTerm('')}}
            onClear={() => {setTerm('')}}
            onSubmitEditing={() => {searchFinalTerm()}}/>
            <FlatList
                numColumns={2}
                contentContainerStyle={{ flexDirection: "column", alignContent: 'space-around', margin: 20 }}
                data={searchResults}
                keyExtractor={(element) => { return element.i.toString() }}
                renderItem={({ item }) => {
                    return (
                        item.im ?
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("searchIndManga",{
                                    manga: item
                                })
                            }}>
                                <View style={styles.mangaContainer}>
                                    <ImageBackground
                                        style={styles.mangaBackgroundImage}
                                        source={{ uri: `https://cdn.mangaeden.com/mangasimg/${item.im}` }}
                                    >
                                        <View style={styles.transparentContainer}>
                                            <Text style={styles.mangaTitle}>
                                                {item.t}
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("searchIndManga",{
                                    manga: item
                                })
                            }}>
                                <View style={styles.mangaContainer}>
                                    <ImageBackground
                                        style={styles.mangaBackgroundImage}
                                        source={require('../../../assets/noimage.png')}
                                    >
                                        <View style={styles.transparentContainer}>
                                            <Text style={styles.mangaTitle}>
                                                {item.t}
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                    );
                }} />
        </View>
    );
}

SearchScreen.navigationOptions = ({navigation}) => {
    return {
        title: "Search"
    }
        
}
const styles = StyleSheet.create({
    mangaContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    mangaBackgroundImage: {
        height: 250,
        width: 155,
        justifyContent: 'flex-end'
    },
    transparentContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    mangaTitle: {
        color: 'white',
        alignSelf: 'center'
    }
});
export default SearchScreen;