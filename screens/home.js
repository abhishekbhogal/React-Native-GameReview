import React,{ useState} from "react";
import {Text,FlatList,TouchableOpacity,View,Modal,StyleSheet, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from "./reviewForm";

const Home = ({navigation}) =>{

	const [modalOpen, setModalOpen]= useState(false);

	const [reviews, setReviews] = useState([
		{title:'COD Warzone', rating:3, body:'loren ipsum',key:'1'},
		{title:'CyberPunk 2077', rating:5, body:'loren ipsum',key:'2'},
		{title:'GTA V', rating:4, body:'loren ipsum',key:'3'}
	]);

	const addReview = (review) =>{
		review.key = Math.random().toString();
		setReviews((currentReviews)=>{
			return [review, ...currentReviews]
		})
		setModalOpen(false);
	};


	return(
		<View style={globalStyles.container}>
			
			<Modal visible={modalOpen} animationType='slide' >
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.modalContent}>
				<MaterialIcons 
				name="close" 
				size={25}
				onPress={()=>setModalOpen(false)}
				style={{...styles.modalToggle, ...styles.modalClose}} 
 
			/>
					<ReviewForm addReview={addReview}  />

				</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons 
				name="add" 
				size={25}
				onPress={()=>setModalOpen(true)}
				style={styles.modalToggle} 
			/>

			<FlatList 
			data={reviews}
			renderItem={({  item})=>(
				<TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
					<Card>
					<Text style={globalStyles.titleText}>{item.title}</Text>
					</Card>
				</TouchableOpacity>
			)}
			/>
			
		</View>
	);
};

const styles=StyleSheet.create({
	modalToggle:{
		marginBottom:10,
		borderWidth: 1,
		borderColor: "#f2f2f2",
		padding:10,
		borderRadius:10,
		alignSelf: "center"
	},
	modalClose:{
		marginTop:20,
		marginBottom:0
	},
	modalContent:{
		flex:1
	}
});

export default Home;