document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;
    const newWithdrawAmount = parseInt(newWithdraw);

    // clear withdraw field 
    withdrawField.value = '';

    // calculate total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const previousBalance = parseInt(previousTotalBalance.innerText);
    // check validation 
    if(isNaN(newWithdrawAmount)){
        alert('please input amount you want to withdraw');
        return;
    }
    else if(newWithdrawAmount > previousBalance){
        alert('you have no balance this amount');
        return;
    }
    // calculate withdraw amount 
    const previousWithdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdraw = parseInt(previousWithdrawAmount.innerText);
    const currentWithdrawBalance = previousWithdraw + newWithdrawAmount;
    previousWithdrawAmount.innerText = currentWithdrawBalance;

    const currentTotalBalance = previousBalance - newWithdrawAmount;
    previousTotalBalance.innerText = currentTotalBalance;
});