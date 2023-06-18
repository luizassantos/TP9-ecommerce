import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Carrinho from './src/screens/Carrinho';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider>

          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen  name='Home' component={Home} />
            <Stack.Screen name='Carrinho' component={Carrinho} />
          </Stack.Navigator>

        </NativeBaseProvider>
      </NavigationContainer>
  );
}
