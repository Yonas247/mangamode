import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { bottomNavigator, createBottomTabNavigator } from 'react-navigation-tabs'
import ResolveScreen from './src/screens/authScreens/ResolveScreen'
import ChapterScreen from './src/screens/mangaScreens/ChapterScreen'
import LoginScreen from './src/screens/authScreens/LoginScreen'
import SignupScreen from './src/screens/authScreens/SignupScreen'
import HomePageScreen from './src/screens/mangaScreens/HomePageScreen'
import CategoryScreen from './src/screens/mangaScreens/CategoryScreen'
import SearchScreen from './src/screens/mangaScreens/SearchScreen'
import UpdatesScreen from './src/screens/mangaScreens/UpdatesScreen'
import FavoritesScreen from './src/screens/mangaScreens/FavoritesScreen'
import SettingsScreen from './src/screens/mangaScreens/SettingsScreen'
import DownloadsScreen from './src/screens/mangaScreens/DownloadsScreen'
import MangaScreen from './src/screens/mangaScreens/MangaScreen'
import { Feather,MaterialIcons } from '@expo/vector-icons'

const switchNavigator = createSwitchNavigator({
  // resolveScreen: ResolveScreen,
  // chapter: ChapterScreen,
  mainFlow: createBottomTabNavigator(
    {
      homeFlow: createStackNavigator({
        home: HomePageScreen,
        downloads: DownloadsScreen,
        updates: UpdatesScreen,
        homeIndManga: MangaScreen
      }, {
        navigationOptions: () => {
          return {
            tabBarLabel: "HOME",
            tabBarIcon: ({ tintColor }) => {
              return <Feather name="home" color={tintColor} size={25} />
            }
          }
        }
      }),
      category: CategoryScreen,
      searchFlow: createStackNavigator({
        search: SearchScreen,
        searchIndManga: MangaScreen,
        searchChapter: ChapterScreen
      },{
        navigationOptions: () => {
          return {
            tabBarLabel:"SEARCH",
            tabBarIcon: ({tintColor}) => {
              return (
                <Feather
                name="search"
                color={tintColor}
                size={25}/>
              );
            }
          }
        }
      }),
      favFlow: createStackNavigator({
        favorites: FavoritesScreen,
        favIndManga: MangaScreen
      }, {
        navigationOptions: () => {
          return {
            title: 'Fav',
            tabBarLabel: "FAVORITE",
            tabBarIcon: ({ tintColor }) => {
              return <MaterialIcons name="favorite" color={tintColor} size={25} />
            }
          }
        }
      }),
      settings: SettingsScreen
    },
    {
      tabBarOptions: {
        showIcon: true,
      }
    }),


  //   loginFlow: createStackNavigator({
  //   login: LoginScreen,
  //   signup: SignupScreen
  // }),

})

const App = createAppContainer(switchNavigator);

export default App;