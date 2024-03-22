import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import EpisodeStack from "./episodeStack";
import CharacterStack from "./characterStack";
import Favorites from "../app/Favorites";
import { Colors } from "../constants.js/colors";

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="EpisodeStack"
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.blue200 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gainsboro",
      }}
    >
      <BottomTab.Screen
        name="CharacterStack"
        component={CharacterStack}
        options={{
          headerShown: false,
          title: "Characters",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="EpisodeStack"
        component={EpisodeStack}
        options={{
          headerShown: false,
          title: "Episodes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarStyle: { backgroundColor: Colors.blue200 },
          headerStyle: { backgroundColor: Colors.blue200 },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
