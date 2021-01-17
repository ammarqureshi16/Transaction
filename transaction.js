function income() {
  var account = document.getElementById("account").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  console.log(account, date, time, "<<<<<---");

  var incomeData = {
    account,
    date,
    time,
  };
// Adding data to firestore
  function addIncome() {
    db.collection("income").add(incomeData).then(function (res) {

        console.log('response-->>>> ',res)
          
      }).catch((error)=>{
          alert(error.message)
      });
  }
  addIncome()

//Getting data from Firebase

function getIncome() {
   var data= db.collection('income').get().then(function(response){
    console.log(response)
    response.forEach(docs => {
        console.log(docs.data())
    });
   })

}
getIncome()
  
}
