// getInput fuction
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //Clear input field
    inputField.value = '';
    return amountValue;
}

// update total fuction
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
} 

// get current balance fuction
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

// update balance fuction
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// Handle Deposite and Balance update
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        //get and update deposite total
        updateTotalField('deposit-total', depositAmount);
        //update balance
        updateBalance(depositAmount, true);
    }

})

// Handle Withdraw and Balance update
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        //get and update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);
        //update balance
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than you have')
    }
})  