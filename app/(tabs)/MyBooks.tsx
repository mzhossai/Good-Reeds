import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'




export default function MyBooks() {

  
  

  return (
    <SafeAreaView style={{ flex: 1 , borderWidth: 2, borderColor: "green"}}>
      <ScrollView 
        style={{ flex: 1, borderWidth: 2, borderColor: "red"}}
        contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
        <Text style={{ borderWidth: 2, borderColor: "blue", height: 400}}> Use an Api to get your books</Text>
        <Text style={{ borderWidth: 2, borderColor: "blue", height: 400}}> Use an Api to get your books</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}