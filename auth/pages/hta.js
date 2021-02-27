

setTimeout(function(){
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
	if(user.emailVerified)
	{

	}
	else
	{
		window.location.replace("mailnv.html");
	}


} else {
  // No user is signed in.
window.location.replace("hta.html");

}

            }, 5000)