document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const inputamount = document.getElementById('input-amount').value
    console.log(inputamount)
    const inputpinnumber = document.getElementById('input-pin-number').value
    console.log(inputpinnumber)

    if (inputpinnumber === '1234') {
        console.log('You have added Money')

        const currentAmount = document.getElementById('current-Amount').innerText
        console.log(currentAmount)

        const currentAmountnumber = parseFloat(inputamount)
        const inputAmountnumber = parseFloat(currentAmount)

        const newbalence = currentAmountnumber + inputAmountnumber
        console.log(newbalence)
        document.getElementById('current-Amount').innerText = newbalence

    }
    else {
        alert('felled to add Money')
    }
})