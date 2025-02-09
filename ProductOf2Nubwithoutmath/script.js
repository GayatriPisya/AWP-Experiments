function findProduct() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "Please enter valid numbers.";
      return;
    }
  
    let product = 0;
  
    for (let i = 0; i < num2; i++) {
      product += num1;
    }
  
    document.getElementById("result").textContent = `The product of ${num1} and ${num2} is: ${product}`;
  }
  