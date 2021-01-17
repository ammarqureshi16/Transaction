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
    .then((user) => {
      console.log("user=>>", user);
      // alert(" Signup Successfully ")
      window.location.href = "./Transaction.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}
function gotoFacebook(){
    location.href="https://www.facebook.com/"
}

function logout() {
  // alert("logo");
  firebase
    .auth()
    .signOut()
    .then((res) => {
// alert(";kkhkghjg")
        console.log("Success Logot")
        window.location.href="./Login.html"
    }).catch(e=>{
        console.log(e)
    });

  console.log("Logout");
}
