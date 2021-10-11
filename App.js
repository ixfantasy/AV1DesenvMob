// Nome: Nathália Pinto Fortunato & Jorbe Junior
// Matricula: 0050016724 & 0050016533

import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 5000);

  return (
      <View style={styles.container}>

        <Home />
  
        <Text>AV1 Desenvolvimento Mobile - Nathália & Jorbe</Text>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f5e3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
