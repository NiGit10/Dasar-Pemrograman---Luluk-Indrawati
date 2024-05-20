// Fungsi Black Box untuk menguji penjumlahan
function testAddition() {
    const input1 = 5;
    const input2 = 3;
    const result = add(input1, input2);

    if (result === input1 + input2) {
        return "Test Addition: Passed";
    } else {
        return "Test Addition: Failed";
    }
}

// Fungsi Black Box untuk menguji perkalian
function testMultiplication() {
    const input1 = 4;
    const input2 = 6;
    const result = multiply(input1, input2);

    if (result === input1 * input2) {
        return "Test Multiplication: Passed";
    } else {
        return "Test Multiplication: Failed";
    }
}

function runTests() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Kosongkan hasil sebelumnya

    // Jalankan pengujian dan tampilkan hasilnya
    resultsDiv.innerHTML += testAddition() + "<br>";
    resultsDiv.innerHTML += testMultiplication() + "<br>";
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}
