const grades = {
    "A+": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0
};

function createSubjects() {

    let subjectCount = document.getElementById("subjectCount").value;
    let form = document.getElementById("subjectForm");

    if (subjectCount <= 0) {
        alert("Enter valid number!");
        return;
    }

    form.innerHTML = "";
    form.style.display = "block";


    document.getElementById("subjectSection").style.display = "none";


    document.getElementById("calcBtn").style.display = "inline-block";

    for (let i = 1; i <= subjectCount; i++) {

        form.innerHTML += `
            <h3>Subject ${i}</h3>
            Subject Name: <input type="text" id="s${i}"><br>
            Credits: <input type="number" id="c${i}"><br>
            Grade: <input type="text" id="g${i}"><br><br>
        `;
    }
}

function calculate() {

    let subjectCount = document.getElementById("subjectCount").value;

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= subjectCount; i++) {

        let credit = document.getElementById("c" + i).value;
        let grade = document.getElementById("g" + i).value.toUpperCase();

        if (credit === "" || grade === "") {
            alert("Please fill all fields!");
            return;
        }

        credit = Number(credit);

        if (grades[grade] === undefined) {
            alert("Invalid Grade in Subject " + i);
            return;
        }

        totalCredits += credit;
        totalPoints += credit * grades[grade];
    }

    let sgpa = totalPoints / totalCredits;
    let percentage = sgpa * 9.5;

    document.getElementById("result").innerHTML =
        "Your SGPA: " + sgpa.toFixed(2) +
        "<br>Your Percentage: " + percentage.toFixed(2) + "%";


    document.getElementById("printBtn").style.display = "inline-block";
}

const calculateSGPA = calculate;

function Print_result() {
    window.print();
}
