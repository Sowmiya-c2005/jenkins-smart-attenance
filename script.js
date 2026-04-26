function markPresent() {
    let name = document.getElementById("name").value;
    if(name === "") {
        alert("Enter student name");
        return;
    }
    document.getElementById("status").innerHTML = name + " is Present ✔";
    document.getElementById("status").style.color = "green";
}

function markAbsent() {
    let name = document.getElementById("name").value;
    if(name === "") {
        alert("Enter student name");
        return;
    }
    document.getElementById("status").innerHTML = name + " is Absent ❌";
    document.getElementById("status").style.color = "red";
}