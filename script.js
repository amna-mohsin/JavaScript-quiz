function Question(qNum) {
    if (qNum === 1) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        var Sum = a + b;
        alert("Sum: " + Sum);
    }

    else if (qNum === 2) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        var c = Number(prompt("Enter third Number:"));
        var Sum = a + b + c;
        alert("Sum: " + Sum);
    }

    else if (qNum === 3) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        var Sum = a + b;
        alert("Sum: " + Sum);
    }

    else if (qNum === 4) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        alert("Sum: " + (a + b));
        alert("Difference: " + (a - b));
        alert("Product:" + (a * b));
        alert("Quotient: " + (a / b));
    }

    else if (qNum === 5) {
        var name = prompt("Enter your name:");
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        alert("Hello" + " " + name + ", the Sum of " + ` ${a} and ${b} is ` + (a + b));
    }

    else if (qNum === 6) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        var Sum = a + b;
        console.log("Sum: " + Sum);
    }

    else if (qNum === 7) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        if (isNaN(a) || isNaN(b)) {
            alert("Please enter a valid number. ");
        }
        else {
            var Sum = a + b;
            alert("Sum is: " + Sum);
        }
    }

    else if (qNum === 8) {
        var a = Number(prompt("Enter First Number:"));
        Sum = a + 10;
        alert("After adding 10: " + Sum);
    }

    else if (qNum === 9) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));

        if (isNaN(a) || isNaN(b)) {
            alert("Please enter a valid number.");
        } else {
            var sum = a + b;

            if (sum % 2 === 0) {
                alert("Sum is even : " + sum);
            } else {
                alert("Sum is odd : " + sum);
            }
        }
    }

    else if (qNum === 10) {
        var a = Number(prompt("Enter First Number:"));
        var b = Number(prompt("Enter Second Number:"));
        var operator = prompt("Enter operator (+, -, *, /):");
        if (operator === "+") {
            alert("Result:" + (a + b));
        }
        else if (operator === "-") {
            alert("Result:" + (a - b));
        }
        else if (operator === "*") {
            alert("Result:" + (a * b));
        }
        else if (operator === "/") {
            alert("Result:" + (a / b));
        }
        else {
            alert("Invalid operator.");

        }
    }
    else {
        alert("Invalid question number.");
    }
}


