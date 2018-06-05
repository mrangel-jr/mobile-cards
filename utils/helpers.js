// utils/helpers.js
import { AsyncStorage  } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'FlashCards:notifications';

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationAsync);
}

function createNotification () {
    return {
      title: 'Remember your study!',
      body: "👋 Don't forget to start your quiz!!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      },
    };
}


export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync();

                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(20);
                tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                );

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              }
            });
        }
    });
}

export function getBasicStructure(key) {
  return {
      key:{
        questions:[],
        title:key,
    },
  };
}