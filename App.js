import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Spacecrafts from './screens/Spacecrafts';
import SpaceStation from './screens/SpaceStation';
import MapStars from './screens/MapStars';
import Meteors from './screens/Meteors';
import NasaImages from './screens/NasaImages';
import Mars from './screens/Mars';
import Dashboard from './screens/Dashboard';
import AboutApp from './screens/AboutApp';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Spacecrafts" component={Spacecrafts} />
        <Stack.Screen name="SpaceStation" component={SpaceStation} />
        <Stack.Screen name="MapStars" component={MapStars} />
        <Stack.Screen name="Meteors" component={Meteors} />
        <Stack.Screen name="NasaImages" component={NasaImages} />
        <Stack.Screen name="Mars" component={Mars} />
         <Stack.Screen name="AboutApp" component={AboutApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
