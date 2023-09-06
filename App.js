import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './Pages/WelcomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfilePage from './Pages/ProfilePage';
import HomePage from './Pages/HomePage';
import { createContext, useState } from 'react';
import ChatPage from './Pages/ChatPage';


const ChatStack = createStackNavigator();
const ChatScreens = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name='chatlist' component={HomePage} />
      <ChatStack.Screen name='chat' component={ChatPage} />
    </ChatStack.Navigator>
  )
}

const AuthStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const LogContext = createContext();
export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLog=()=>{
    setIsLogin(!isLogin);
  }
  return (
    <NavigationContainer>
      <LogContext.Provider
        value={{
          Login:{value: isLogin, setFunc: handleLog}
        }}
      >
        {isLogin ? (
          <Tab.Navigator>
            <Tab.Screen name='chats' component={ChatScreens} />
            <Tab.Screen name='settings' component={ProfilePage} />
          </Tab.Navigator>
        ) : (
          <AuthStack.Navigator screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name='home' component={WelcomePage} />
            <AuthStack.Screen name='signin' component={SignInPage} />
            <AuthStack.Screen name='signup' component={SignUpPage} />
          </AuthStack.Navigator>
        )}
      </LogContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {LogContext};