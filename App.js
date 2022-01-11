// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to !</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//1st
// import React from 'react';
// import HomeScreen from './app/screens/HomeScreen';


// export default function App() {
//   return <HomeScreen/>;
// }

//2nd
// import React from 'react';
// import RegisterScreen from './app/screens/RegisterScreen';

// export default function App() {
//   return <RegisterScreen/>;
// }

//3rd
// import React from 'react';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return <WelcomeScreen/>;
// }

//4th
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './app/screens/HomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



const navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Welcome: WelcomeScreen,
      Register: RegisterScreen,
     
       
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Matrimony register'
      },
    }
  );

  export default createAppContainer(navigator);
