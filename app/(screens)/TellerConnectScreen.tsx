import { Image, StyleSheet, Platform, Button, TextInput, SafeAreaView, Alert, Text} from 'react-native';
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';


const tellerConnect = require('../TellerConnect/TellerConnect.html')

type RootStackParamList = {
    Home: undefined;
    TellerConnect: undefined;
  };


type TellerConnectScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TellerConnect'>;
export default function TellerConnectScreen() {

    const navigation = useNavigation<TellerConnectScreenNavigationProp>();
    return (
        <WebView
            style={styles.container}
            source={ tellerConnect }
            onMessage={(event) => {
            Alert.alert(event.nativeEvent.data);
            navigation.navigate('Home');
            }}/>
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