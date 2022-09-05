import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


var school = [];


export default function Home({navigation}) {
    
    const [kidsNumber, setKidsNumber] = React.useState(null);
    const [schoolName, setSchoolName] = React.useState('');
    
    function addSchool(schoolName, kidsNumber){
        school.push([schoolName,kidsNumber]);
        console.log(school);
    }
  
    return (

    <View style={styles.container}>
      <Text>Adicione sua escola</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setSchoolName}
        value={schoolName}
        placeholder="Colégio"
        keyboardType="default"
      />
      <Text>Adicione o número de alunos do colégio</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setKidsNumber}
        value={kidsNumber}
        placeholder="Alunos"
        keyboardType="decimal-pad"
    />

        <Button
        onPress={() => addSchool(schoolName,kidsNumber)}
        title="Adicionar colégio"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
        />

      {/*<TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
    />*/}
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
