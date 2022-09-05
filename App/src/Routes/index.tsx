import { StatusBar } from 'expo-status-bar';
import Home from '../Screens/Home';
import FindWay from '../Screens/Findway';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

export default function Routes() {

  const ref = React.useRef(null);

  return (
    <View style={styles.container}>
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="FindWay" component={FindWay}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
