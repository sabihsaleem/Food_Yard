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
import CuisineList from '../component/CuisineList';

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator()

function Tabular() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#77C360',
        inactiveTintColor: '#707070',
        activeBackgroundColor: '#FDFFFC',
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home" 
              color={focused ? color : "#707070"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="dashboard"
              color={focused ? color : "#707070"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cuisine"
        component={Cuisine}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
            name='coffee'
            type='feather'
              color={focused ? color : "#707070"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="map"
              color={focused ? color : "#707070"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CuisineList"
        component={CuisineList}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="list"
              color={focused ? color : "#707070"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Nav() {
  return (
    <Stack.Navigator initialRouteName="tabular" headerMode={null}>
      <Stack.Screen name="Drawer">{(props) => <Drawer {...props} />}</Stack.Screen>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="tabular" component={Tabular} />
      <Stack.Screen name="Cuisine" component={Cuisine} />
      <Stack.Screen name="CuisineList" component={CuisineList} />
    </Stack.Navigator>
  );
}
