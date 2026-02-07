function countingSort(event) {
    event.preventDefault();

    const input = document.getElementById("arrayInput").value;
    const result = document.getElementById("result");

    // Allow only digits, commas, and spaces
    const validPattern = /^[0-9,\s]+$/;

    if (!validPattern.test(input)) {
        result.style.color = "red";
        result.textContent = "Only positive digits / integers are allowed.";
        return;
    }

    const arr = input.split(",").map(num => Number(num.trim()));

    // Check empty values, zero, negative, or invalid numbers
    if (
        arr.length === 0 ||
        arr.some(num => isNaN(num) || num <= 0)
    ) {
        result.style.color = "red";
        result.textContent = "Only positive digits / integers are allowed.";
        return;
    }

    // Counting Sort logic
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);

    for (let num of arr) {
        count[num]++;
    }

    let sortedArray = [];
    for (let i = 1; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArray.push(i);
            count[i]--;

            
        }
    }

    result.style.color = "#d3ad7f";
    result.textContent = "Sorted Array: " + sortedArray.join(", ");
}
