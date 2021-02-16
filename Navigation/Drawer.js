import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../component/Contact';
import Home from '../component/Home';
import Dashboard from '../component/Dashboard';
import Maps from '../component/Maps';
import Cuisine from '../component/Cuisine';

const Drawers = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawers.Navigator initialRouteName="Home">
      <Drawers.Screen name="Home" component={Home} />
      <Drawers.Screen name="Dashboard" component={Dashboard} />
      <Drawers.Screen name="Contact" component={Contact} />
      <Drawers.Screen name="Map" component={Maps} />
      <Drawers.Screen name="Cuisine" component={Cuisine} />
    </Drawers.Navigator>
  );
}
