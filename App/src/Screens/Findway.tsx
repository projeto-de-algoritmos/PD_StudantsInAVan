import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';

export default function FindWayScreen({navigation}) {
  var schools = useSelector((state:RootState) => state.School);
  var qtdStudents = schools.map((currSchool) => currSchool[1]);
  var capacity = 15;
  var n = qtdStudents.length;
  var result;
  var temp = 0;

  function knapsack(n,capacity,qtdStudents){
    console.log(temp);
    if(n==0 || capacity == 0){
      return 0;
    }
    if(qtdStudents[n-1] > capacity){
      temp = knapsack(n-1, capacity, qtdStudents);
      return temp;
    }
    else{
      temp = Math.max(qtdStudents[n-1] + knapsack(n-1,capacity-qtdStudents[n-1], qtdStudents), knapsack(n-1,capacity-qtdStudents[n-1], qtdStudents));
      return temp;
    }
  }

  function alertResult(){
    console.log(qtdStudents[2]);
    result = knapsack(n, capacity, qtdStudents);
    //console.log(result.toString());
    Alert.alert("Quantidade de alunos: " + result.toString());
  }



    return (

    <View style={styles.container}>

        <Button
        onPress={() => alertResult()}
        title="Mostrar Máximo de alunos"
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
