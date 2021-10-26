console.log(firebase.firestore);
function login() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  document.getElementById("email-input").value = "";
  document.getElementById("password-input").value = "";
  console.log(" Email : " + email);
  console.log(" Password : " + password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((Response) => {
      console.log(Response.user.uid);
      let userId = Response.user.uid;
      localStorage.setItem("userID", JSON.stringify(userId));
      alert(" Login Successfully ");
      window.location.href = "./Transaction.html";
    })
    .catch((error) => {
      var errorMessage = error.message;
      var errorCode = error.code;
      alert(errorMessage);
    });
}
function create() {
  window.location.href = "Sign Up.html";
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      console.log("Success Logout");
      localStorage.clear();
      window.location.href = "./Login.html";
    })
    .catch((e) => {
      console.log(e);
    });
  console.log("Logout");
}
