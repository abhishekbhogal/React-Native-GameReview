import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Review from '../screens/reviewDetails';
import About from '../screens/about';
import Header from "../shared/header";
import React from 'react';

const screens = {
	About: {
		screen: About,
		navigationOptions: ({navigation}) =>{
			return{
			headerTitle: ()=> <Header navigation={navigation} title="About GameZone"/>,
			}
		}
	}
};

const AboutStack = createStackNavigator(screens,{
	defaultNavigationOptions:{
			headerTintColor: "#fff",
			headerTitleAlign: "center",
			headerStyle:{
				backgroundColor: "#384",
				height:85,

			}
	}
});

export default AboutStack; 