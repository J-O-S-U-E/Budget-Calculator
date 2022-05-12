
// grabs the number from text field and creates a new input text field with the value
function addExpense() {
    if (document.getElementById("expense").value == "") {
        alert("Enter a number");
    } else {
        let j = parseInt(document.getElementById("expense").value);
    var i = document.createElement("input");
    i.setAttribute('type', 'text');
    i.setAttribute('value', j);
    document.getElementById("container").appendChild(i);
    document.getElementById("container").appendChild(document.createElement("br"));
    document.getElementById("expense").value = "";
    }
}

// inputs all values in an array from id="container" with input field. Then adds them all up using a loop and updates html element with total.
function calculate() {
    let total = 0;
    let expenses = [];
    $("#container input").each(function() {
          expenses.push($(this).val());
      })
    for (let i=0; i<expenses.length; i++) {
        total += parseInt(expenses[i]);
    }
    document.getElementById("total").innerHTML = total;
}