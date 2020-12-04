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
