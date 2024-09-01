import 'react-native-gesture-handler';

import { Image, StyleSheet, Platform, Button, TextInput, SafeAreaView, Alert, Text} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview'

import Constants from 'expo-constants';

import { useState, useCallback } from 'react'

type RootStackParamList = {
  Home: undefined;
  TodoList: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const tellerConnect = require('../TellerConnect/TellerConnect.html')

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [text1, onChangeText1] = useState('');
  const [text2, onChangeText2] = useState('');

  const onSubmit = () => {
    // Send data to plaid api for authorization
  }

  return (
            <WebView
            style={styles.container}
            source={ tellerConnect }/>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
