import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
const RegisterScreen = (navigation) => {
  return (
    <View>
          <ScrollView>
       <ImageBackground
    //  blurRadius={10}

      style={styles.background}
          source={require("../assets/register.jpg")}>
              
              <Image style={styles.logo} source={require('../assets/home.jpg')} />
             
      
          <Text >  Name </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
         <Text >  Number </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
         <Text > Community </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text > Profile created by </Text>
       <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="self or parent"
      />
            <Text >  Gender </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Male/Female"
      />
         <Text >  Martial Status </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Married/unmarried/Divorced"
      />
         <Text >  CitezenShip </Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="India"
        
      />
      <Text > State </Text>
       <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
       
      />
        <Text > District </Text>
       <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Currently-Livingin"
        
       />
      
      
      <Button title= 'signup and register   '
       onPress={() => console.log('Buttonpressed')}
   // onPress={() => navigation.navigate('Welcome')}
      />
     
        </ImageBackground>
        </ScrollView>
    </View>
  );
};
 
const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: '#4b0082',
        borderWidth: 1,
        color: "#fdf5e6"
      },

      logo: {
        width: 120,
        height: 120,
        alignContent:'space-between',
        alignSelf:'center',
        marginBottom: 20,
    },
    
    background: {
    
      justifyContent: 'flex-end',
      height: 770,
      width: 400
  
  },
});
 
export default RegisterScreen;
