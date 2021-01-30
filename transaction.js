// getIncome();
// var db = firebase.firestore();
function income() {
  var amount = document.getElementById("amount").value;
  // console.log("amount--->>",amount)
  const date = document.getElementById("date-input").value;
  const time = document.getElementById("time-input").value;
  const description = document.getElementById("description-input").value;
  const categories = document.getElementById("categories-input").value;
  // Object stard
  var incomeData = {
    amount,
    date,
    time,
    description,
    categories,
  };
  // console.log("amount--->>>",amount)}
  // Object colse
  // Adding data to firestore
  function addIncome() {
    db.collection("income")
      .add(incomeData)
      .then(function (res) {
        $("#modal").modal("hide");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  addIncome();
}

//Getting data from Firebase
const tabdiv = document.getElementById("table-div");
const table = document.getElementById("table-user");
tabdiv.appendChild(table);

var userData;
var userArr=[]
// userArr.push="amount"
function getIncome() {
  db.collection("income")
    .get()
    .then(function (response) {
      response.forEach((docs) => {
        // console.log(docs.data());
        userData = docs.data();
        // userArr.push(userData)
        // console.log("Uder Data-->>", userData);
        // console.log("userArr->>>", userArr)
        for (let i=0; i<=userArr.length;i++){
          // console.log(userArr[i])
          // console.log(userArr[i].amount)
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          // const tdone = document.createElement("td");
          // const tdtwo = document.createElement("td");

          // table.style.display="flex"
          td.style.color = "Green";
          table.appendChild(tr);
          tr.appendChild(td);
          td.innerHTML=userArr[i].amount
          // tr.appendChild(tdtwo)
          // tdtwo.style.color="red"
          // tdtwo.innerHTML="time"

          // td.appendChild(tdone)
          // tdone.innerHTML=userArr[i].time
          // tdone.appendChild(tdtwo)
          // tdtwo.innerHTML=userArr[i].date
          
        }
      });
    });
}
  // document.getElementById("amount-input").value=""
  // document.getElementById("date-input").value=""
  // document.getElementById("time-input").value=""
  // document.getElementById("description-input").value=""
  // document.getElementById("categories-input").value=""