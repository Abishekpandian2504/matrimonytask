import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';


import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Name1',
        description: ' I belong to a well-mannered middle-class family and strongly believe in Hindu culture, rituals & holds an open-minded personality ',
        image: require('../assets/me1.jpg')
    },
    {
        id: 2,
        title: 'Name2',
        description: 'describe myself as someone whose reliable, trendy, smart and someone who always has a smile on the face',
        image: require('../assets/me2.jpg')
    },
    {
        id: 3,
        title: 'Name3',
        description: ' well-mannered middle-class family and strongly believe in muslim culture',
        image: require('../assets/me1.jpg')
    },
    {
        id: 4,
        title: 'Name4',
        description: ' always has a smile on the face',
        image: require('../assets/me2.jpg')
    },
    {
        id: 5,
        title: 'Name5',
        description: '  rituals & holds an open-minded personality ',
        image: require('../assets/me1.jpg')
    },
    {
        id: 6,
        title: 'Name6',
        description: ' trendy, smart and someone who always has a smile on the face',
        image: require('../assets/me2.jpg')
    },
   
]

function WelcomeScreen(props) {
   
    const[messages, setMessages] = useState(initialMessages);

    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
    
    <Screen>
      <FlatList
        data={messages} 
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => (
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image} 
                onPress={() => console.log("Message selected", item)}
        
                renderRightActions={() => ( <ListItemDeleteAction onPress={ () => handleDelete(item) } /> )}
                     
                />
        )}
          
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'Name2',
                        description: 'describe myself as someone whose reliable, trendy, smart and someone who always has a smile on the face',
                        image: require('../assets/me2.jpg') 
                    },
                ])
            }
            } 
            />
       
        
        </Screen>
    );
}

const styles = StyleSheet.create({
    // screen: {
    //     // paddingTop: Platform.OS === 'andorid' ? StatusBar.currentHeight : 0
    //     paddingTop: Constants.statusBarHeight
    // }
})

export default WelcomeScreen;