import React from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { Text, ListItem, Avatar,Badge} from 'react-native-elements'
import moment from 'moment'
import mangas from '../../api/mangas.json'
import { SafeAreaView } from 'react-navigation'
import ScreenHeader from '../../components/ScreenHeader'
import { MaterialIcons } from '@expo/vector-icons'

const UpdatesScreen = ({ navigation, data }) => {
    return (
        <View>
            <Text>
                UpdatesScreen
            </Text>
            <FlatList
                data={mangas.manga.slice(1, 6)}
                keyExtractor={(element) => { return element.i.toString() }}
                renderItem={({ item }) => {
                    
                    return (
                        <ListItem
                            
                            leftAvatar={() => {
                                return (
                                    <Avatar
                                        containerStyle={{borderRadius: 25}}
                                        size="large"
                                        title={`${item.t}`}
                                        activeOpacity={0.7}
                                        source={{ uri: `https://cdn.mangaeden.com/mangasimg/${item.im}` }}
                                    />)
                            }}
                            title={`${item.t}`}
                            subtitle={`Last Updated ${moment.unix(item.ld).format('lll').toString()}`}
                            subtitleStyle={{fontSize: 12}}
                            badge={{ value: 3,badgeStyle: { backgroundColor:'#888' },textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }} 
                            />
                    );
                }} />
        </View>
    );
}

UpdatesScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Updates"
    }
}

const styles = StyleSheet.create({
    mangaContainer: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignContent: 'center'
    },
    mangaImage: {
        height: 90,
        width: 60
    },
    mangaTitle: {
    }
});
export default UpdatesScreen;