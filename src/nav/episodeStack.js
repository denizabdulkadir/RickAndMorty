import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "../constants.js/colors";
import Episodes from "../app/Episodes";
import EpisodeDetail from "../app/EpisodeDetail";
import CharacterDetail from "../app/CharacterDetail";

const Stack = createStackNavigator();
export default function EpisodeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.blue200 },
        headerStyle: { backgroundColor: Colors.blue200 },
        headerTitleStyle: { color: "white" },
        headerBackTitleStyle: { color: "white" },
      }}
    >
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
