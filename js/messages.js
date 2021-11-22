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
  
      function IntitalizeFireBaseMessaging() {
          messaging
              .requestPermission()
              .then(function () {
                  console.log("Notification Permission");
                  return messaging.getToken();
              })
              .then(function (token) {
                  console.log("Token : "+token);
                  document.getElementById("token").innerHTML=token;
              })
              .catch(function (reason) {
                  console.log(reason);
              });
      }
  
      messaging.onMessage(function (payload) {
          console.log(payload);
          const notificationOption={
              body:payload.notification.body,
              icon:payload.notification.icon
          };
  
          if(Notification.permission==="granted"){
              var notification=new Notification(payload.notification.title,notificationOption);
  
              notification.onclick=function (ev) {
                  ev.preventDefault();
                  window.open(payload.notification.click_action,'_blank');
                  notification.close();
              }
          }
  
      });
      messaging.onTokenRefresh(function () {
          messaging.getToken()
              .then(function (newtoken) {
                  console.log("New Token : "+ newtoken);
              })
              .catch(function (reason) {
                  console.log(reason);
              })
      })
      IntitalizeFireBaseMessaging();