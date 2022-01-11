import React from 'react';

import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground,Image } from 'react-native';

  const HomeScreen = ({ navigation }) => {
  // console.log(props);
 // console.log(props.navigation);
 // console.log(props.navigation.navigate('List'))

  return (
    <View>
         <Text style={styles.text}> matrimony   </Text>
       <Image
     // blurRadius={1}

      style={styles.background}
          source={require("../assets/home.jpg")}>
               </Image>
     
      <View style={styles.container}>
      <Button
       //  onPress={() => console.log('Button pressed')

        onPress={() => navigation.navigate('Welcome')}
        title="LogIn"
        />
   
     
         <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Register"
        onPress={() => navigation.navigate('Register')}
        
      />
      </View>
     
           
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: '#ff69b4',
    paddingTop:20,
    paddingBottom: 10
  },
  container: {
    margin:10,
    backgroundColor: '#d8bfd8',
    
  },
  background: {
    
    justifyContent: 'flex-end',
    alignItems: "center",
    height: 550,
    width:400,
    
   // flex: 1,
    
},
 
 
});

export default HomeScreen;

