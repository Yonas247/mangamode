import React from 'react'
import { View, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import ScreenHeader from '../../components/ScreenHeader'
import { SafeAreaView } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import mangas from '../../api/mangas.json'
const FavoriteScreen = ({ navigation }) => {

    return (
        <View>
            <FlatList
                numColumns={2}
                contentContainerStyle={{ flexDirection: "column", alignContent: 'space-around', margin: 20 }}
                data={mangas.manga.slice(1, 100)}
                keyExtractor={(element) => { return element.i.toString() }}
                renderItem={({ item }) => {
                    return (
                        item.im ?
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("favIndManga",{
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
                            <TouchableOpacity>
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

FavoriteScreen.navigationOptions = (params) => {
    return {
        title: 'Favorites'
    }
}
const styles = StyleSheet.create({
    mangaContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    mangaBackgroundImage: {
        height: 190,
        width: 135,
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
export default FavoriteScreen;