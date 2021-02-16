import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class extends Component {

  home() {
    this.props?.navigation?.navigate('Home')
  }

  Dashboard() {
    this.props?.navigation?.navigate('Dashboard')
  }

  Cuisine() {
    this.props?.navigation?.navigate('Cuisine')
  }

  Map() {
    this.props?.navigation?.navigate('Map')
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => this.home()}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../home.png')}
            />
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => this.Dashboard()}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../dashboard.png')}
            />
            <Text>Dashboard</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => this.Cuisine()}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../cuisine.png')}
            />
            <Text>Cuisine</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => this.Map()}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../map.png')}
            />
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
