// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBSDx-N8hjOHkm2NqIS-BbiM-i3rqM3syc",
    authDomain: "csoc-bitd.firebaseapp.com",
    databaseURL: "https://csoc-bitd-default-rtdb.firebaseio.com",
    projectId: "csoc-bitd",
    storageBucket: "csoc-bitd.appspot.com",
    messagingSenderId: "923187982655",
    appId: "1:923187982655:web:0aa70425c12e3deac8238a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let postCollection = document.querySelector('#posts-collection');

  const db = firebase.firestore();

  console.log(db);

  //create Posts
  function createPosts(title, time, content, autho) {
      let div = document.createElement('table');
      div.setAttribute('class','col-md-4');

      let h2 = document.createElement('td');
	  h2 = document.createElement('h2');
      let p = document.createElement('tbody');
	  let auth = document.createElement('td');
      let small = document.createElement('thead');
	  
	  
	  
      h2.textContent = title;
      small.textContent = time;
      p.textContent = content;
	  auth.textContent = autho;
	  div.appendChild(small);
      div.appendChild(h2);
      
	  div.appendChild(auth);
      div.appendChild(p);
	  
	  


      postCollection.appendChild(div);
  }

  //get Posts
  function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
            createPosts(
                docs.data().postName,
                docs.data().createdAt,
                docs.data().postContent,
				docs.data().author
            )
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();