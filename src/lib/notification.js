import * as Notifications from "expo-notifications";

export async function scheduleDailyNotification() {
  const perm = await Notifications.requestPermissionsAsync();
  if (perm.status != "granted") {
  } else {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Opps!",
        body: "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.",
      },
      trigger: { seconds: 1 },
    });
  }
}
