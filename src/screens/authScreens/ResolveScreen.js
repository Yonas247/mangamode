import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {Button} from 'react-native-elements'
import {Feather} from '@expo/vector-icons';
const ResolveScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                ResolveScreen
            </Text>
            <Button
            title="Navigation"
            onPress={() => {navigation.navigate("home")}}
            />
            <Button
            title="Chapter"
            onPress={() => {navigation.navigate("chapter")}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
export default ResolveScreen;