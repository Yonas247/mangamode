import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import ScreenHeader from '../../components/ScreenHeader'
import {Feather} from '@expo/vector-icons'
const SettingsScreen = () => {
    return (
        <View>
            <ScreenHeader
                title="Settings"
            />
            <Text>
             SettingsScreen
            </Text>
        </View>
    );
}

SettingsScreen.navigationOptions = () => {
    return {
        tabBarLabel: "SETTINGS",
        tabBarIcon: ({tintColor}) => {
            return <Feather name="settings" size={25} color={tintColor}/>
        }
    }
}
const styles = StyleSheet.create({});
export default SettingsScreen;