import React, { useState, useEffect } from 'react'
import { ScrollView, View,StyleSheet, ImageBackground } from 'react-native'
import {Text} from 'react-native-elements'
import MangaChapters from '../../components/MangaChapters'
import { Card } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import eden from '../../api/eden'
import moment from 'moment'
const MangaScreen = ({ navigation }) => {
    const manga = navigation.getParam("manga")
    const [mangaDetails, setMangaDetails] = useState([]);

    useEffect(() => {
        getManga(manga.i)
    }, [])

    const getManga = async (id) => {
        try {
            const response = await eden.get(`/manga/${id}`)
            setMangaDetails(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <ScrollView>
            <View style={styles.mangaContainer}>
                <ImageBackground
                    style={styles.mangaBackgroundImage}
                    source={{ uri: `https://cdn.mangaeden.com/mangasimg/${manga.im}` }}
                >
                    <View style={styles.transparentContainer}>
                        <Text style={styles.mangaTitle}>
                            {manga.t}
                        </Text>
                    </View>
                </ImageBackground>
                <Text h5>
                    {`Description: ${mangaDetails.description}`}
                </Text>
                <Text>
                    {`Categories: ${mangaDetails.categories}`}
                </Text>
                <Text>
                    {`chapters length: ${mangaDetails.chapters_len}`}
                </Text>
                <Text>
                    {`Released in ${mangaDetails.released}`}
                </Text>
                <Text>
                    {`Last Updated ${moment(mangaDetails.last_chapter_update).format('lll').toString()}`}
                </Text>
                <Text>
                    {`Author: ${mangaDetails.author}`}
                </Text>
            </View>

            <MangaChapters
                chapters={mangaDetails.chapters} 
                navigation={navigation}/>

        </ScrollView>
    );
}

MangaScreen.navigationOptions = ({ navigation }) => {
    const manga = navigation.getParam("manga")
    return {
        title: manga.t
    }
}
const styles = StyleSheet.create({
    mangaContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mangaBackgroundImage: {
        height: 210,
        width: 155,
        justifyContent: 'flex-end'
    },
    transparentContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    mangaDescription: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mangaTitle: {
        color: 'white',
        alignSelf: 'center'
    }
});
export default MangaScreen;


{/* <Text style={styles.mangaDescription}>
                    {/* 
                    categories: [shounen,school life]
                    chapters_len: length of manga chapters
                    released: year it was released
                    last_chapter_update: last chapter that was updated in unix time
                    author: author of manga
                    //  */}
                    // {JSON.stringify(mangaDetails, null, 2)}

                // </Text> */}