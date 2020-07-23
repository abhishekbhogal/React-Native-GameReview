import React from 'react';
import { Formik } from "formik";
import { globalStyles} from '../styles/global';
import {StyleSheet,View,TextInput,Button,Text } from 'react-native';
import * as yup from 'yup';
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
	title: yup.string().required().min(4) ,
	body: yup.string().required().min(8),
	rating: yup.string().required().min()
});

const ReviewForm = ({addReview})=>{
	return(
		<View style={globalStyles.container}>
				<Formik 
					initialValues={{title:'',body:'',rating:''}}
					validationSchema={reviewSchema}
					onSubmit={(values, actions)=>{ 
						actions.resetForm();
						addReview(values);

					}} >

						{(formikProps)=>(
							<View>
								<TextInput 
									style={globalStyles.input}
									placeholder="Review Title"
									onChangeText={formikProps.handleChange('title')}
									value={formikProps.values.title}
									onBlur={formikProps.handleBlur('title')}
								/>
								<Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>


								<TextInput 
									multiline minHeight={60}
									style={globalStyles.input}
									placeholder="Review Body"
									onChangeText={formikProps.handleChange('body')}
									value={formikProps.values.body}
									onBlur={formikProps.handleBlur('body')}
								/>
								<Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
								<TextInput 
									keyboardType="numeric"
									style={globalStyles.input}
									placeholder="Rating (1-5)"
									onChangeText={formikProps.handleChange('rating')}
									value={formikProps.values.rating}
									onBlur={formikProps.handleBlur('rating')}
								/>
								<Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

								<FlatButton text="submit" onPress={formikProps.handleSubmit}/>

							</View>
						)}

				</Formik>
		</View>
	);
};

const styles= StyleSheet.create({

});

export default ReviewForm;

