function calculateCost() {
    let roomRental = parseFloat(document.getElementById("roomRental").value);
    let food = parseFloat(document.getElementById("food").value);
    let entertainment = parseFloat(document.getElementById("entertainment").value);
    
    let total = roomRental + food + entertainment;
    let withTax = total * 1.13;
    
    document.getElementById("total").value = total;
    document.getElementById("withTax").value = withTax;
  }