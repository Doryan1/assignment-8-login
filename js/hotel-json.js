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
/* object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
*/

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  /* save the data to database */
  firebase
    .firestore()
    .collection("hoteldata") // use different name
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
