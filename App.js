import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewImageScreen from './android/app/screens/ViewImageScreen';
import WelcomeScreen from './android/app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="login"
          component={ViewImageScreen}
          options={{title: 'image'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
