import { StatusBar } from 'expo-status-bar';
import Home from '../Screens/Home';
import FindWay from '../Screens/Findway';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddSchool from '../Screens/AddSchool';


export default function Routes() {
  
  const Stack = createStackNavigator();
  const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="Rotas" component={FindWay}/>
        <Stack.Screen name ="Nova escola" component={AddSchool}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
