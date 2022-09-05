import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function FindWayScreen({navigation}) {
  
    return (

    <View style={styles.container}>

        <Button
        onPress={() => console.log("salve")}
        title="to na outra tela"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
