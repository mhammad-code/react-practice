let input = document.getElementById("taskInput");
let button = document.getElementById("addButton");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    // Mark task as completed when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = "";
});