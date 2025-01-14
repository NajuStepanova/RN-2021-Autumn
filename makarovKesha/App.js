import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/routers/tabs';
import { Provider } from "react-redux";
import store from './store/index';

const App = () => {

  const [color, setColor] = useState('#2E1F99');

  return (
    <Provider store={store}>
    <SafeAreaView style={styles.main}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#8EDFDD',
  },
});

export default App;