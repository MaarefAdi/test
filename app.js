// Initialize Firebase
var config = {
  apiKey: "AIzaSyBf93BVzxnWkD0XbYbdapel5s_iq8reRm8",
  authDomain: "adi-app-b3698.firebaseapp.com",
  databaseURL: "https://adi-app-b3698.firebaseio.com",
  projectId: "adi-app-b3698",
  storageBucket: "adi-app-b3698.appspot.com",
  messagingSenderId: "642187156042"
};
firebase.initializeApp(config);


// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BIS-utsXNZDY5rcU3OeKUKki5cycQN9NJ17ENhNeuh096qqLDNzdhx7AVjPA7G6abWV-yQJTj4qFArnzYpoolE8");
messaging.requestPermission().then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  return messaging.getToken();

})
.then (function(token){
  console.log(token);
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);

});
