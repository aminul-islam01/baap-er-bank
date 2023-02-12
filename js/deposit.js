document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;
    const newDepositAmount = parseInt(newDeposit);
    
    // clear deposit field 
    depositField.value = '';

    // check validation
    if(isNaN(newDepositAmount)){
        alert('please input amount you want to deposit');
        return;
    }
    
    // calculate deposit amount 
    const previousDepositAmount = document.getElementById('deposit-amount');
    const previousDeposit = parseInt(previousDepositAmount.innerText);
    const currentDepositBalance = previousDeposit + newDepositAmount;
    previousDepositAmount.innerText = currentDepositBalance;

    // calculate total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const previousBalance = parseInt(previousTotalBalance.innerText);
    const currentTotalBalance = previousBalance + newDepositAmount;
    previousTotalBalance.innerText = currentTotalBalance;
});