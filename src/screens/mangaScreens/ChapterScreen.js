import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import eden from '../../api/eden'
const ChapterScreen = ({navigation}) => {
    const chapter = navigation.getParam("chapter");
    const [images, setImages] = useState([]);
    console.log(chapter);
    useEffect(() => {
        getChapterImages(chapter[3]);
    }, [])

    const getChapterImages = async (id) => {
        try {
            const response = await eden.get(`/chapter/${id}/`);
            const rev = response.data.images.reverse();
            setImages(rev);
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <View>
            <Text>
                ChapterScreen
            </Text>
            <FlatList
                    data={images}
                    keyExtractor={(element) => { return JSON.stringify(element[0]) }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text>
                                    {`Page: ${item[0]}`}
                                </Text>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        margin: 10,
                                        height: 600,
                                        width: 350,
                                        alignSelf: 'center'
                                    }}
                                    source={{ uri: `https://cdn.mangaeden.com/mangasimg/${item[1]}` }} />
                            </View>

                        );
                    }} />
        </View>
    );
}

ChapterScreen.navigationOptions = ({navigation}) => {
    const chapter = navigation.getParam("chapter")
    return {
        title: `Chapter ${chapter[0]}`
    }
}
const styles = StyleSheet.create({});
export default ChapterScreen;