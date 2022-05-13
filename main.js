
// grabs the number from text field and creates a new input text field with the value
function addExpense() {
    if (document.getElementById("expense-to-add").value == "") { // validation check
        alert("Enter a number");
    } else {
        // EXPENSE CONTAINER CREATION
        let expenseContainer = document.createElement('div');

        // EXPENSE INPUT FIELD CREATION
        let expenseValue = parseFloat(document.getElementById("expense-to-add").value);
        let expenseInputField = document.createElement("input");
        expenseInputField.setAttribute('type', 'text');
        expenseInputField.setAttribute('value', expenseValue);
        expenseContainer.appendChild(expenseInputField);
        document.getElementById("expense-to-add").value = ""; // clear input field after inputting and creating the new input field

        // EXPENSE DELETE BUTTON CREATION
        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.textContent = "delete";
        expenseContainer.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => { expenseContainer.remove(); });

        // ADD EXPENSE CONTAINER TO CONTAINER WITH ALL EXPENSES
        document.getElementById("container-all-expenses").appendChild(expenseContainer);
    }
}

// inputs all values in an array from id="container-all-expenses" with input field. Then adds them all up using a loop and updates html element with total.
function calculate() {
    let total = 0;
    $("#container-all-expenses input").each(function() {
        total += parseFloat($(this).val());
    })
    document.getElementById("total").innerHTML = total;
}

function clearContainer() {
    $("#container-all-expenses").empty();
    document.getElementById("total").innerHTML = 0;
}