


async function incriesesCounter() {
    let counterPlus = 0;
    enum Buttoms {
        Plus,
        Minus
    }
    let response = await fetch('http://localhost:3000/click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: counterPlus++ }),
    });
    await response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    const plusButton = document.getElementById('Plus');
    const minusButton = document.getElementById('Minus');

    if (plusButton && minusButton) {
        plusButton.addEventListener('click', () => incriesesCounter());
        minusButton.addEventListener('click', () => incriesesCounter());
    }
});