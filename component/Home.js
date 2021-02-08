import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text style={styles.item}>SplashScreen 启动屏</Text>
        <Text style={styles.item}>@：http://www.devio.org/</Text>
        <Text style={styles.item}>GitHub:https://github.com/crazycodeboy</Text>
        <Text style={styles.item}>Email:crazycodeboy@gmail.com</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2f2',
    marginTop: 30,
  },
  item: {
    fontSize: 20,
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: 'darkgray',
  },
});
