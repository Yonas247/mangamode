import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Feather } from '@expo/vector-icons'
import ForYou from '../../components/ForYou'
import AllMangas from '../../components/AllManga'
import mangas from '../../api/mangas.json'
import MangaUpdates from '../../components/MangaUpdates'
import MangaDownloads from '../../components/MangaDownloads'
const HomePageScreen = ({ navigation }) => {

    const randomNum = () => {
        return Math.floor(Math.random() * 100)
    }
    const data = [
        mangas.manga[randomNum()],
        mangas.manga[randomNum()],
        mangas.manga[randomNum()],
    ]

    return (
        <ScrollView>

            <MangaUpdates
                data={data}
                navigation={navigation}
            />
            <MangaDownloads
                data={data}
                navigation={navigation}
            />

            <ForYou
                data={data}
                navigation={navigation}
            />
            <AllMangas
                data={mangas.manga.sort((a, b) => a.t.localeCompare(b.t))}
                navigation={navigation} />
            <Text>
                HomePageScreen
            </Text>
        </ScrollView>
    );
}
HomePageScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Home',

    }
}

const styles = StyleSheet.create({
});
export default HomePageScreen;