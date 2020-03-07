import React from 'react'
import { Card, Text, Button } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
const MangaUpdates = ({ navigation, data }) => {
    const refreshImage = () => {
        return data[0].im;
    }
    return (
        <View>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("updates")
            }}
            >
               <Card
                featuredTitle='Updates'
                containerStyle={{borderRadius: 10}}
                image={{ uri: `https://cdn.mangaeden.com/mangasimg/${refreshImage()}` }}>
                <Text style={{ marginBottom: 10 }}>
                    New chapters updated daily...
                </Text>

            </Card> 
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({});

export default MangaUpdates;