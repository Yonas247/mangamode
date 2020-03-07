import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import ScreenHeader from '../../components/ScreenHeader'
const DownloadsScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                DownloadsScreen
            </Text>
        </View>
    );
}
DownloadsScreen.navigationOptions = ({navigation}) => {
    return {
        title: "Downloads"
    }
}
const styles = StyleSheet.create({});
export default DownloadsScreen;