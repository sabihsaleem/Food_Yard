import 'react-native-gesture-handler';
import * as React from 'react';
import Home from '../component/Home';
import Dashboard from '../component/Dashboard';
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearenceOptions, // optional
} from 'react-native-animated-nav-tab-bar';
import { Icon } from 'react-native-elements'
import Contact from '../component/Contact';
import Drawer from '../Navigation/Drawer';
import Maps from '../component/Maps';
import { createStackNavigator } from '@react-navigation/stack';
import Cuisine from '../component/Cuisine';

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator()

function Tabular() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#006EF1',
        inactiveTintColor: '#006EF1',
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" color="#006EF1" />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="dashboard" color="#006EF1" />
          ),
        }}
      />
      <Tabs.Screen
        name="Cuisine"
        component={Cuisine}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="facebook" color="#006EF1" />
          ),
        }}
      />
      <Tabs.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="map" color="#006EF1" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Nav() {
  return (
    <Stack.Navigator initialRouteName="tabular" headerMode={null}>
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="tabular" component={Tabular} />
      <Stack.Screen name="Cuisine" component={Cuisine} />
    </Stack.Navigator>
  );
}
