import React, { useEffect } from 'react'
import { Card, Text, Button } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
const MangaChapters = ({ navigation, chapters }) => {
    
    
    // const response = await eden(`https://www.mangaeden.com/api/chapter/${id}/`);
            
    return (
        <FlatList
                data={chapters}
                keyExtractor={(element) => { return JSON.stringify(element[1]) }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("searchChapter", { chapter: item}) }}
                            style={styles.background}>
                            <View style={styles.chapterContainer}>
                                <View style={styles.square}>
                                    <Text style={styles.chapterNum}>
                                        {item[0]}
                                    </Text>
                                </View>
                                <View style={styles.chapterDetails}>
                                    <Text h6
                                        style={styles.chapterText}>
                                        Chapter {item[0]}
                                    </Text>
                                    <Text h6
                                        style={styles.text}>
                                        {item[2] ? item[2]:null}
                                    </Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    );
                }} />
    );
}

const styles = StyleSheet.create({
    reverseButton: {
        marginHorizontal: 25,
        alignSelf: 'flex-end'
    },
    background: {
        alignContent: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        height: 90
    },
    screen: {
        backgroundColor: '#2E2E2E',
    },
    chapterContainer: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        color: '#FFFFFF',
        marginVertical: 1
    },
    square: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 4,
        margin: 20,
        justifyContent: 'center',

    },
    chapterNum: {
        fontSize: 18,
        color: 'white',
        marginLeft: 9
    },
    chapterDetails: {
        marginTop: 20,
        flexDirection: 'column',
        flexWrap: 'wrap'

    },
    text: {
        color: 'white'
    },
    chapterText: {
        color: 'white',
        fontWeight: 'bold'
    },
    mangaHeader: {
        flexDirection: 'row'
    },
    mangaAuthorAndTitle: {
        marginTop: 20,
        marginLeft: 5
    },
    mangaTitle: {
        color: 'white',
        fontWeight: 'bold'
    },
    mangaAuthor: {
        color: 'gray',
        fontWeight: 'bold'
    }
});

export default MangaChapters;