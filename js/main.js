const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () { 
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const tarnsactionArea = document.getElementById('transaction_area');
    tarnsactionArea.style.display = 'block';
});