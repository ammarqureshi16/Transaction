var item = localStorage.getItem("userName");
// console.log(item)
// userName()
const userId = localStorage.getItem("userID");
function getname() {
  // alert("Ammar")
  var userName = document.getElementById("user-name");
  var item = localStorage.getItem("userName");
  var naam = JSON.parse(item);
  // userName.innerHTML = naam;
  firebase
    .firestore()
    .collection("Users")
    .add({
      userName: naam,
    })
    .then(function () {
      // console.log("name saved in database")
    })
    .catch(function (error) {
      alert(error.message);
    });
  firebase
    .firestore()
    .collection("Users")
    .get()
    .then(function (snapshot) {
      snapshot.forEach(function (doc) {
        let currentUser = doc.data();
        userName.innerHTML = currentUser.userName;
        console.log(currentUser);
      });
    })
    .catch(function (error) {
      alert(error.message);
    });
}
getname();
// getTransaction();
function addIncome() {
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date-input").value;
  const time = document.getElementById("time-input").value;
  const description = document.getElementById("description-input").value;
  const categories = document.getElementById("categories-input").value;
  firebase
    .firestore()
    .collection("Transaction")
    .add({
      userName: item,
      userID: userId,
      amount: amount,
      date: date,
      time: time,
      description: description,
      categories: categories,
      type: "income",
    })
    .then(function () {
      // swal("Transaction Save");
      alert("Transaction Save");
      $("exampleModalLabel").modal("hide");
    })
    .catch(function (error) {
      alert(error.message);
    });
}
function getTransaction() {
  // const userMainId=localStorage.getItem("userId")
  db.collection("Transaction")
    .where("userID", "==", userId)
    .get()
    .then(function (snapshot) {
      snapshot.forEach(function (doc) {
        let data = doc.data();
        console.log("data--->>", data);
        // console.log(data.description)
        const tablebody = document.getElementById("table-body");

        const tr = document.createElement("tr");
        tablebody.appendChild(tr);
        const th1 = document.createElement("th");
        tr.appendChild(th1);
        th1.innerHTML = data.amount;

        const th2 = document.createElement("th");
        tr.appendChild(th2);
        th2.innerHTML = data.date;

        const th3 = document.createElement("th");
        tr.appendChild(th3);
        th3.innerHTML = data.time;

        const th4 = document.createElement("th");
        tr.appendChild(th4);
        th4.innerHTML = data.description;

        const th5 = document.createElement("th");
        tr.appendChild(th5);
        th5.innerHTML = data.categories;
      });
    })
    .catch(function (error) {
      alert(error.message);
    });
}
function filter() {
  // alert("----->>>")
  const userId = localStorage.getItem("userID");
  // var naam = JSON.parse(item)
  const type = document.getElementById("type-filter").value;
  console.log(type);
  if (type === "All") {
    return getTransaction();
  }
  const tablebody = document.getElementById("table-body");
  firebase
    .firestore()
    .collection("Transaction")
    .where("type", "==", type)
    .where("userID", "==", userId)
    .get()
    .then(function (snapshot) {
      snapshot.forEach(function (doc) {
        const data = doc.data();
        console.log(data);

        const tr = document.createElement("tr");
        tablebody.appendChild(tr);
        const th1 = document.createElement("th");
        tr.appendChild(th1);
        th1.innerHTML = data.amount;

        const th2 = document.createElement("th");
        tr.appendChild(th2);
        th2.innerHTML = data.date;

        const th3 = document.createElement("th");
        tr.appendChild(th3);
        th3.innerHTML = data.time;

        const th4 = document.createElement("th");
        tr.appendChild(th4);
        th4.innerHTML = data.description;

        const th5 = document.createElement("th");
        tr.appendChild(th5);
        th5.innerHTML = data.categories;
      });
    })
    .catch(function (error) {
      alert(error.message);
    });
}
