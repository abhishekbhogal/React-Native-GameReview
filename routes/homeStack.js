import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/reviewDetails';
import Header from "../shared/header";
import React from 'react';


const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({navigation}) =>{
			return{
			headerTitle: ()=> <Header navigation={navigation} title="GameZone"/>,
			}
		}
	},
	ReviewDetails:{
		screen: Review,
		navigationOptions:{
			title: 'Review Details',
		}
	}
};

const HomeStack = createStackNavigator(screens,{
	defaultNavigationOptions:{
			headerTintColor: "#fff",
			headerTitleAlign: "center",
			headerStyle:{
				backgroundColor: "#384",
				height:85,

			}
	}
});

export default HomeStack; 