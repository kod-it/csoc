function sendEmailVerification(){
	var user = firebase.auth().currentUser;


user.sendEmailVerification().then(function() {
  // Email sent.
  window.alert("Verification Sent")
}).catch(function(error) {
  // An error happened.
  window.alert("Error in Verification Sending. Error: " + error.message); 
});
}


function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'successfull',
            title: 'Signed Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("../index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}