import React from 'react'
import {View,StyleSheet,FlatList,ImageBackground, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'
const ForYou = ({navigation,data}) => {

    return (
        <SafeAreaView>
            <Text h3>
                For You
            </Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(element) => {return JSON.stringify(element.i)}}
            renderItem={({item}) => {
                
                return (
                    <View style={styles.mangaContainer}>
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("homeIndManga",{
                                manga: item
                            })
                        }}
                        >
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
                        
                    </View>
                );
            }}/>
        </SafeAreaView>
    );
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
export default ForYou;