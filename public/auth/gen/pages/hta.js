

setTimeout(function(){
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
	

} else {
  // No user is signed in.
  window.location.replace("hta.html");
}

            }, 5000)