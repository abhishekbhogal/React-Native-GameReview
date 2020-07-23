import React,{useState} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import About from './screens/about';
import Review from './screens/reviewDetails';
import Navigator from './routes/drawer';


const getFonts = () =>{
	return Font.loadAsync({
		'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
	});
};


const App = ()=> {
	const [fontsLoaded, setFontsLoaded]=useState(false);

	if(fontsLoaded){
		return (
			<Navigator />

		); 
	} else{
		return(
		<AppLoading 
			startAsync={getFonts}
			onFinish={()=> setFontsLoaded(true)}
		/>);
	}
 
}

export default App;