import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {AntDesign} from '@expo/vector-icons'
import ScreenHeader from '../../components/ScreenHeader'
const CategoryScreen = () => {
    return (
        <View>
            <ScreenHeader
            title="Category"/>
            <Text>
                CategoryScreen
            </Text>
        </View>
    );
}

CategoryScreen.navigationOptions = ({navigation}) => {
    return {
        tabBarLabel: 'CATEGORY',
        tabBarIcon: ({tintColor}) => {
            return <AntDesign name="appstore-o" color={tintColor} size={25}/>
        }
    }
}
const styles = StyleSheet.create({});
export default CategoryScreen;