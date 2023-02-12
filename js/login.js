document.getElementById('submit-btn').addEventListener('click', function(){
    // console.log('btn click')
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');
    const email = userEmail.value;
    const password = userPassword.value;

    if(email === 'baap@beta.com' && password === 'secret'){
        window.location.href = "bank.html";
    }
    else{
        alert('your password is wrong');
    }
    userEmail.value = '';
    userPassword.value ='';
});