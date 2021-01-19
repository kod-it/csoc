

setTimeout(function(){
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
	window.location.replace("pages/profile.html");

} else {
  // No user is signed in.

}

            }, 5000)