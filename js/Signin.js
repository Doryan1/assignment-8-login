var firebaseConfig = {
  apiKey: "AIzaSyDt4JhLkehdlBlRNYTBTXlbaW2xO-FlJAI",
  authDomain: "assignment8-3b1cc.firebaseapp.com",
  projectId: "assignment8-3b1cc",
  storageBucket: "assignment8-3b1cc.appspot.com",
  messagingSenderId: "11224839624",
  appId: "1:11224839624:web:22876c74e0050203c43cfd",
  measurementId: "G-42SYXXCD2Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = "doryanz@gmail.com";
  var password = "tacoeater1";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
