function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function fibsRec(n, sequence = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return sequence;
    return fibsRec(n - 1, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]);
}

function generateFibonacci() {
    const num = parseInt(document.getElementById('inputNumber').value);
    if (isNaN(num) || num < 1) {
        alert('Please enter a valid positive number');
        return;
    }
    document.getElementById('iterativeResult').innerText = fibs(num).join(', ');
    document.getElementById('recursiveResult').innerText = fibsRec(num).join(', ');
}
