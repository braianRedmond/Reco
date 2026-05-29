importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA5lekXEuPz-lwvjnBYe6d8HAkt-hOCOdQ",
  authDomain: "reno-recordatorios.firebaseapp.com",
  projectId: "reno-recordatorios",
  storageBucket: "reno-recordatorios.firebasestorage.app",
  messagingSenderId: "766309569137",
  appId: "1:766309569137:web:b490640826e3e7203d01d0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Reno - Recordatorio';
  const notificationOptions = {
    body: payload.notification?.body || 'Tienes un recordatorio pendiente',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: payload.data?.reminderId || 'default',
    requireInteraction: true,
    data: payload.data
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});