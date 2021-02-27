

setTimeout(function(){
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
	if(user.emailVerified)
	{
	window.location.replace("profile.html");
	}
	else
	{
		window.location.replace("mailnv.html");
	}


} else {
  // No user is signed in.
}

            }, 5000)