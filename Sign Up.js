function create() {
    // alert("Function Is Correct")
    const fullName=document.getElementById("full-name-input").value
    const email=document.getElementById("email-input").value
    const password=document.getElementById("password-input").value

    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then((user) => {
      console.log("user=>>", user);
      alert(" Signup Successfully ")
      window.location.href = "Login.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    
    document.getElementById("full-name-input").value=""
    document.getElementById("email-input").value=""
    document.getElementById("password-input").value=""
}