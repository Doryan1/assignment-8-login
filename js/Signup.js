var firebaseConfig = {
  apiKey: "AIzaSyAbeo7pSZtNGo5OsZdusZVxAw6viHU1eXo",
  authDomain: "assignment7-15e08.firebaseapp.com",
  databaseURL: "https://assignment7-15e08.firebaseio.com",
  projectId: "assignment7-15e08",
  storageBucket: "assignment7-15e08.appspot.com",
  messagingSenderId: "982981695217",
  appId: "1:982981695217:web:2b7d778929b40e3561bb50",
  measurementId: "G-3VZ6QBJVVK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = "yilianz4@gmail.com";
  var password = "ddsgagafda";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
