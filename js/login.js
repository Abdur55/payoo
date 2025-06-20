// document.getElementById('login-btn').addEventListener('click', function(event){
//     // step 2
//     event.preventDefault();
    
//     // step 2 
//    const phonenumber =  document.getElementById('phone-number').value
//    const pinnumber =document.getElementById('pin-number').value

//    console.log(phonenumber, pinnumber)

//    if(phonenumber === '120' && pinnumber === '5000'){
//     console.log(';You have logined')
//    }
//    else{
//     alert('You have some wrong')
//    }
// })


document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault()
 
   
  const phonenumber = document.getElementById('phone-number').value
  const pinnumber = document.getElementById('pin-number').value
  console.log(phonenumber, pinnumber)

  if(phonenumber === '120' && pinnumber === '1000'){
    console.log('you have logined ')
    window.location.href = '/Home.html'
  }
  else{
    alert('You have some wrong')
  }

})