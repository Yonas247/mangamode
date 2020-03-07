import React from 'react'
import { Card, Text, Button } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
const MangaDownloads = ({ navigation, data }) => {


    const refreshImage = () => {
        return data[2].im;
    }
    return (
        <View>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("downloads")
            }}
            >
               <Card
                featuredTitle='Downloads'
                containerStyle={{borderRadius: 10}}
                image={{ uri: `https://cdn.mangaeden.com/mangasimg/${refreshImage()}` }}>
                <Text style={{ marginBottom: 10 }}>
                    Downloaded Manga Chapters
                </Text>

            </Card> 
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({});

export default MangaDownloads;