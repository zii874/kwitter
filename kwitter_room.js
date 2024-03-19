
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfcPSQ-eDt-SHH4YY7efrKIvaEh6nPEOY",
  authDomain: "dd-w9lk.firebaseapp.com",
  databaseURL: "https://dd-w9lk-default-rtdb.firebaseio.com",
  projectId: "dd-w9lk",
  storageBucket: "dd-w9lk.appspot.com",
  messagingSenderId: "790906067885",
  appId: "1:790906067885:web:36999be374ce8bbdd85f24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}







function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNme(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();






function redirectToRoomNme(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
