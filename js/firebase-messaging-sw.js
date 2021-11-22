importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyDzCzgfl3pfQynqK4r12QoMf0ZDn_M3F9Q",
  authDomain: "aretec-pwa.firebaseapp.com",
  projectId: "aretec-pwa",
  storageBucket: "aretec-pwa.appspot.com",
  messagingSenderId: "598823245497",
  appId: "1:598823245497:web:5338f7c0c638621068ed68"
};
  
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});