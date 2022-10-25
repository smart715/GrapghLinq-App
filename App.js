import { StyleSheet, Text, View } from 'react-native';
import Daseboard from './Screens/Daseboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowserExtensions from './Components/BrowserExtensions';
import SScreen from './Screens/SScreen';
import Bottoms from './Screens/Bottoms';
import Home from './Screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Daseboard' component={Daseboard} />
        <Stack.Screen name='BrowserExtensions' component={BrowserExtensions} />
        <Stack.Screen name='SScreen' component={SScreen} />
        <Stack.Screen name='Home' component={Home} options={() => ({
          headerShown:true
        })}/>
        <Stack.Screen name='Bottoms' component={Bottoms}
         options={() => ({
          presentation: "transparentModal",
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});