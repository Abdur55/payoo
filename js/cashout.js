document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
   
    const cashoutamount = document.getElementById('cash-out-amount').value
    const inputcashoutpin = document.getElementById('input-cash-out-pin').value
    console.log(cashoutamount, inputcashoutpin)

    if(inputcashoutpin === '1234'){
        console.log('cash out successful')

        const currentAmount = document.getElementById('current-Amount').innerText
        const cashOutCurrentAmount = parseFloat(currentAmount)
        const cashOutAmount = parseFloat(cashoutamount)
      
        const aftercashout = cashOutCurrentAmount - cashOutAmount

        document.getElementById('current-Amount').innerText = aftercashout
    }
    else{
        alert('You have some wrong')
    }
})