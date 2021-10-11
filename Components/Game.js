// Nome: Nathália Pinto Fortunato & Jorbe Junior
// Matricula: 0050016724 & 0050016533

import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import logo1 from '../assets/winGif.gif';
import logo2 from '../assets/defeatGif.gif';


export default function Game() {
  

  const [score, setScore] = useState(0);
  const [jogo, setJogo] = useState();
  const [appChoice, setAppChoice] = useState();
  const [jogada, setJogada] = useState();
  const [cronometro, setCronometro] = useState(true);


  const options = ['PEDRA', 'PAPEL', 'TESOURA'];
  const jogadaApp = () => options[Math.floor(Math.random() * options.length)]


  let resultado = 0;
  let statusJogo = "";
  let resApp = "";


  const onTestPress = (escolha) => {
      resApp = jogadaApp();

      if(escolha != resApp){
        if((escolha == 'PEDRA' && resApp == 'TESOURA') || (escolha == 'PAPEL' && resApp == 'PEDRA') || (escolha == 'TESOURA' && resApp == 'PAPEL')){
          resultado = score + 1;
          statusJogo = 'VITÓRIA!';
        } else {
          if(score > 0){
            resultado = score - 1;
          }
          statusJogo = 'DERROTA!';
        }
      } else {
        resultado = score + 0;
        statusJogo = 'EMPATE!';
      }

      setAppChoice(resApp);
      setScore(resultado)
      setJogo(statusJogo);
  }


  const verificarCronometro = () => {
    setCronometro(false); 
  }

  const resetarJogo = () => {
    setScore(0);
    setAppChoice();
    setJogada();
    setJogo();
  }

  
  return score >= 10 ? (
    <View style = {styles.container}>
      <Text style = {styles.Score2} > ☆ SCORE: {score} ☆ </Text>

      <Image source={logo1} style = {styles.Logo} />

      <TouchableOpacity onPress={() => resetarJogo()} style={styles.PlayAgain}>
        <Text style={styles.PlayAgainText}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  ) :

  cronometro == false ? (
    <View style = {styles.container}>
        <Text style = {styles.Score2} > ☆ SCORE: {score} ☆ </Text>

        <Image source={logo2} style = {styles.Logo} />

        <TouchableOpacity onPress={() => {resetarJogo(); setCronometro(true)}} style={styles.PlayAgain}>
        <Text style={styles.PlayAgainText}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>

  ) : (
    

    <View style={styles.container}>

      {/* RESULTADOS */}
      <Text style = {jogo == 'VITÓRIA!' ? styles.Win : jogo == 'DERROTA!' ? styles.Defeat : jogo == 'EMPATE!' ? styles.Tie : styles.None}>{jogo != null ? jogo : '. . .'}</Text>


      {/* BOTÃO PEDRA */}
      <TouchableOpacity style = {styles.ButtonChoice} onPress = {() => {onTestPress('PEDRA'); setJogada('PEDRA')}}> 
          <Image source={require('../assets/rock.png')} style={styles.ButtonChoiceImage} /> 
      </TouchableOpacity>
      <Text style={[{color: '#69a2b0'}, styles.ChoiceText]}>PEDRA</Text>


      {/* BOTÃO PAPEL */}
      <TouchableOpacity style = {styles.ButtonChoice} onPress = {() => {onTestPress('PAPEL'); setJogada('PAPEL')}} > 
          <Image source={require('../assets/paper.png')} style={styles.ButtonChoiceImage} /> 
      </TouchableOpacity>
      <Text style={[{color: '#e05263'}, styles.ChoiceText]}>PAPEL</Text>


      {/* BOTÃO TESOURA */}
      <TouchableOpacity style = {styles.ButtonChoice} onPress = {() => {onTestPress('TESOURA'); setJogada('TESOURA')}}> 
          <Image source={require('../assets/scissors.png')} style={styles.ButtonChoiceImage} /> 
      </TouchableOpacity>
      <Text style={[{color: '#659157'}, styles.ChoiceText]}>TESOURA</Text>


      {/* FEEDBACK DAS ESCOLHAS */}
      <Text style = {styles.Feedback} >Você jogou: <Text style = {{fontWeight: '800', color: '#13427C'}}>{jogada != null ? jogada : '. . .'}</Text> {"\n"}
      e o adversário jogou: <Text style = {{fontWeight: '800', color: '#BF2234'}}>{appChoice != null ? appChoice : '. . .'}</Text>
      </Text>


      {/* CRONÔMETRO */}
      <CountDown
        until={60 * 2} // tempo 60 * 2
        size={18} // tamanho
        onFinish={() => verificarCronometro()} // chamada
        digitStyle={{backgroundColor: '#FFF'}} // cor do fundo do número
        digitTxtStyle={{color: '#1CC625'}} // cor do dígito
        timeToShow={['M', 'S']} // formato timer
        timeLabels={{m: '', s: ''}} // texto embaixo do dígito de minuto e segundo
      />

      {/* SCORE */}
      <Text style = {styles.Score} > ☆ SCORE: {score} ☆ </Text>

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

  Win: {
    color: '#008F24',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#99FFB3',
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 3,
  },

  Defeat: {
    color: '#570F18',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#F0A8B0',
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 3,
  },

  Tie: {
    color: '#413620',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#DDD2BB',
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 3,
  },

  None: {
    color: '#121416',
    fontSize: 45,
    textAlign: 'center',
  },

  ButtonChoiceImage: { 
    height: 60, 
    width: 100,
    marginTop: 30,
    resizeMode: 'contain',
    alignSelf: 'auto',
  },

  ChoiceText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },

  Feedback: {
    color: '#222222',
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
  },

  Score: {
    color: '#141414',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    margin: 10,
  },

  Score2: {
    color: '#141414',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    margin: 30,
  },

  Logo: {
    resizeMode: 'contain',
    width: 340,
    height: 300,
  },

  PlayAgain:{
    backgroundColor:"#fea971",
    padding: 20,
    margin: 30,
    width: 200,
    borderRadius: 5,
  },

  PlayAgainText:{
    fontSize: 20,
    color: '#CB5201',
    textAlign: 'center',
    fontWeight: '900',
  },
});
