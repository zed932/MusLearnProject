import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import DictionaryScreen from './src/screens/DictionaryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import QuestsScreen from './src/screens/QuestsScreen';
import LearningScreen from './src/screens/LearningScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Quests') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Learning') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Dictionary') {
              iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#6200EE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Quests" component={QuestsScreen} />
        <Tab.Screen name="Learning" component={LearningScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Dictionary" component={DictionaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}