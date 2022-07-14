import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tododetails from './screens/Tododetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'User List' }}
        ></Stack.Screen>
        <Stack.Screen
          name="Tododetails"
          component={Tododetails}
          options={{ title: 'Task Details' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
