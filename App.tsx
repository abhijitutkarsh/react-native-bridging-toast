/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const ToastService = NativeModules.ToastModule

  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity onPress={()=> ToastService.showToast("Bridging Success yupeeee")}>
        <View style = {styles.btn}>
          <Text style = {styles.text}>Click Here to see Toast.</Text>
        </View>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  btn: {
    padding: 10,
    backgroundColor: 'cyan'
  },
  text: {
    color: 'black'
  }
});

export default App;
