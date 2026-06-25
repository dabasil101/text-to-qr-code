import { Tabs } from 'expo-router';
import PaperProvider from 'react-native-paper/src/core/PaperProvider';
import { MD3LightTheme } from 'react-native-paper/src/styles/themes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  // Explicitly enforce Material Design 3 Light Theme
  const paperTheme = MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: paperTheme.colors.primary,
          tabBarInactiveTintColor: paperTheme.colors.onSurfaceVariant,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: 4,
          },
          tabBarStyle: {
            // backgroundColor: paperTheme.colors.surfaceElevation2, // Modern M3 dimensional surface
            borderTopWidth: 0,
            height: 64,
            paddingBottom: 6,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
          },
          headerStyle: {
            backgroundColor: paperTheme.colors.surface,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: paperTheme.colors.onSurface,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Create',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons 
                name={focused ? "plus-box" : "plus-box-outline"} 
                size={26} 
                color={color} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Scan',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons 
                name={focused ? "qrcode-scan" : "camera"} 
                size={24} 
                color={color} 
              />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}