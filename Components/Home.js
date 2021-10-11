// Nome: Nathália Pinto Fortunato & Jorbe Junior
// Matricula: 0050016724 & 0050016533

import React, { useState } from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/home.png';
import Game from './Game';


export default function App() {

  const [score, setScore] = useState(0);
  const [playMode, setPlayMode] = useState(false);

    return playMode ? (
      <Game />
    ) : (
      <View style={styles.container}>
  
        <Image source={logo} style = {styles.Logo} />
  
        <Text style = {styles.Desc} > O famoso jogo de "pedra, papel e tesoura", agora em versão mobile! Faça 10 pontos antes do tempo acabar!</Text>

        <TouchableOpacity onPress={() => { setPlayMode(true)}} style={styles.Button}>
          <Text style={styles.ButtonText}>JOGAR</Text>
        </TouchableOpacity>
      
        <Text style = {styles.Score} >☆ SCORE: {score} ☆</Text>
       
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

  Logo: {
    resizeMode: 'contain',
    width: 340,
    height: 300,
  },

  Desc: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    fontWeight: '500',
  },

  Button:{
    backgroundColor:"#fea971",
    padding: 20,
    width: 200,
    borderRadius: 5,
  },

  ButtonText:{
    fontSize: 30,
    color: '#CB5201',
    textAlign: 'center',
    fontWeight: '900',
  },

  Score: {
    color: '#462255',
    fontSize: 15,
    fontWeight: '500',
    margin: 10,
    textAlign: 'center',
  },
});
