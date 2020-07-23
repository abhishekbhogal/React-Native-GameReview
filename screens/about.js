import React from "react";
import {Text,StyleSheet,View} from 'react-native';
import {globalStyles} from '../styles/global'


const About = () =>{
	return(
		<View style={styles.container}>
			<Text style={styles.text}>This is a game review app here a user can add the review for a game he like and people from gaming community can see that review and it can help them to get some insights about the game.</Text>
			<Text style={styles.developer}>About developer</Text>
			<Text style={styles.github}>https://github.com/abhishekbhogal</Text>
		</View>
	);
};
const styles = StyleSheet.create({
container:{
	flex:1,
	backgroundColor: "#5233"
},
text:{
	marginTop:20,
	fontSize:20,
	fontFamily:"nunito-regular"
},
developer:{
	left:12,
	fontSize:20,
	marginTop:50,
	fontFamily:"nunito-regular"
},
github:{
	color:"blue",
	margin:20
}

});

export default About;