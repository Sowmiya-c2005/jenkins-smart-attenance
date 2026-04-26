function addPresent() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Enter student name");
        return;
    }

    let list = document.getElementById("list");

    let item = document.createElement("li");
    item.innerHTML = name + " - Present ✔";
    item.style.color = "green";

    list.appendChild(item);

    document.getElementById("name").value = "";
}

function addAbsent() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Enter student name");
        return;
    }

    let list = document.getElementById("list");

    let item = document.createElement("li");
    item.innerHTML = name + " - Absent ❌";
    item.style.color = "red";

    list.appendChild(item);

    document.getElementById("name").value = "";
}