import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

import BottomNavigator from "./src/nav/bottomTab";
import QueryProvider from "./src/providers/QueryProvider";
import { store } from "./src/store/store";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <NavigationContainer>
          <StatusBar barStyle={"light-content"} />
          <BottomNavigator />
        </NavigationContainer>
      </QueryProvider>
    </Provider>
  );
}
