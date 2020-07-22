// login button
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () { 
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const tarnsactionArea = document.getElementById('transaction_area');
    tarnsactionArea.style.display = 'block';
});


// input function
function inputAmount(id) {  
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

// deposite function
function updateSpanText(id, depositeAmountNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositeAmountNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


// deposite button
const depositeBtn = document.getElementById('depositebtn');
depositeBtn.addEventListener('click', function () { 
    // const depositeAmount = document.getElementById('depositeAmount').value;
    // const depositeAmountNumber = parseFloat(depositeAmount);
    //console.log(depositeAmountNumber);

    // const currentDeposite = document.getElementById('currentDeposite').innerText;
    // const currentDepositeNumber = parseFloat(currentDeposite);
    // const totalDeposite = depositeAmountNumber + currentDepositeNumber;
    // document.getElementById('currentDeposite').innerText = totalDeposite;


    const depositeAmountNumber = inputAmount("depositeAmount");

    document.getElementById('depositeAmount').value = '';

    updateSpanText('currentDeposite', depositeAmountNumber);
    updateSpanText('currentBalance', depositeAmountNumber);
});

// withdraw button
const withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click', function () {
    const withdrawNumber = inputAmount("withdrawAmount");
    //console.log(withdrawNumber);
    updateSpanText('currentwithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = '';
});

