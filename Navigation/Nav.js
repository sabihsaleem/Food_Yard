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

const Tabs = AnimatedTabBarNavigator();

export default function Nav() {
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
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="address-card" color="#006EF1" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
