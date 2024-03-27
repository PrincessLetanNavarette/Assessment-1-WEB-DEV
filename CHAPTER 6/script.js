function calculateTotal() {
    var costLiter = parseFloat(document.getElementById('cost').value);
    var buyLiter = parseFloat(document.getElementById('buy').value);
    
    var errorMsg = document.getElementById('error-msg');
    var resultMsg = document.getElementById('result');
    
    if (isNaN(costLiter) || isNaN(buyLiter) || costLiter <= 0 || buyLiter <= 0) {
        document.getElementById('error-msg').style.display = 'block';
        resultMsg.style.display = 'none'; // Hide result if there's an error
    } else {
        document.getElementById('error-msg').style.display = 'none';
        var theProduct = costLiter * buyLiter;
        resultMsg.textContent = "Your total amount is " + theProduct.toFixed(2);
        resultMsg.style.display = 'block'; // Show result when calculation is successful
    }
function resetForm() { 
    document.getElementById("reset").reset();
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    }
}   