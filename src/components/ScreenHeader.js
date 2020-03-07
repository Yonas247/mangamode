import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { Feather } from '@expo/vector-icons'
const ScreenHeader = ({ title, navigation }) => {

    const renderHeader = (type) => {
        switch (type) {
            case 'Home': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Category': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Search': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Updates': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Settings': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Favorites': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={downloadComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
            case 'Downloads': {
                return (
                    <Header
                        barStyle='dark-content'
                        leftComponent={backComponent()}
                        centerComponent={{ text: `${title}`, style: { color: '#888888' } }}
                        rightComponent={{ icon: 'home', color: '#888888' }}
                        containerStyle={{ marginLeft: 20, marginTop: 20, backgroundColor: '#FFFFFF' }}
                    />
                )
            }
        }
    }

    const backComponent = () => {
        console.log(navigation)
        return (
            
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("home");
                }}>
                <Feather
                    name="skip-back"
                    size={25}
                />
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
        );
    }
    const downloadComponent = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("downloads");
                }}>
                <Feather
                    name="download"
                    size={25}
                />
            </TouchableOpacity>
        );
    }

    return (
        <View>
            {renderHeader(title)}
        </View>
    );
}

const styles = StyleSheet.create({});

export default ScreenHeader;
