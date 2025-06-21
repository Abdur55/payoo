
// step----1
document.getElementById('addMoney-btn').addEventListener('click', function (event) {

  event.preventDefault()


  console.log('this dko adlk')

  // step---2

  const inputAmount = document.getElementById('input-amount').value
  console.log(inputAmount)
  const inputpinnumber = document.getElementById('input-pin-number').value
  console.log(inputpinnumber)

  //  step 3

  if (inputpinnumber === '1234') {

    console.log('You have added Money')
    //     // step ----4

    const currentAmount = document.getElementById('current-Amount').innerText
    console.log(currentAmount)

    const addMoneynumber = parseFloat(currentAmount)
    const inputAmountnumber = parseFloat(currentAmount)
    const newbalence = addMoneynumber + inputAmountnumber
    console.log(newbalence)
    document.getElementById('current-Amount').innerText = newbalence
  }
  else {
    alert('feiled to add money')
  }

})