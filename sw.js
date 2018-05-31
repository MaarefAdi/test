// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BIS-utsXNZDY5rcU3OeKUKki5cycQN9NJ17ENhNeuh096qqLDNzdhx7AVjPA7G6abWV-yQJTj4qFArnzYpoolE8");
messaging.requestPermission().then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
}).catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});
