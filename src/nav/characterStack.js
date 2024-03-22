import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "../constants.js/colors";
import Characters from "../app/Characters";
import CharacterDetail from "../app/CharacterDetail";

const Stack = createStackNavigator();

export default function CharacterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.blue200 },
        headerStyle: { backgroundColor: Colors.blue200 },
        headerTitleStyle: { color: "white" },
        headerBackTitleStyle: { color: "white" },
      }}
    >
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
    </Stack.Navigator>
  );
}
