document.getElementById("calculateBudget").addEventListener("click", function() {
    var selectedCategory = document.querySelector('input[name="category"]:checked');
    var selectedDays = document.querySelector('input[name="category1"]:checked');
    var selectedRates = document.querySelectorAll('input[name="rate-range"]:checked');
  
    if (selectedCategory && selectedDays && selectedRates.length > 0) {
      var categoryValue = selectedCategory.value;
      var daysValue = selectedDays.value;
      var ratesValues = Array.from(selectedRates).map(rate => rate.value);
      
      // Calculate total budget based on the selected options
      // You can perform your calculation here and display the result
      var totalBudget = calculateTotalBudget(categoryValue, daysValue, ratesValues);
      document.getElementById("budgetResult").textContent = "Total Cost: ₹" + totalBudget;
    } else {
      alert("Please select category, number of days, and at least one rate range option.");
    }
  });
  
  function calculateTotalBudget(category, days, rates) {
    var baseBudget = 0;
  
    // Calculate base budget based on category and number of days
    switch (category) {
      case "wedding":
        baseBudget = 150000;
        break;
      case "maternity":
        baseBudget = 15000;
        break;
      case "portrait":
        baseBudget = 8000;
        break;
      case "Interiors":
        baseBudget = 12000;
        break;
      default:
        break;
    }
  
    // Calculate additional costs based on selected rates
    var additionalCosts = 0;
  
    rates.forEach(function(rate) {
      switch (rate) {
        case "Lawns":
          additionalCosts += 20000;
          break;
        case "studio":
          additionalCosts += 1500;
          break;
        case "At Home":
          additionalCosts += 12000;
          break;
        case "Offices":
          additionalCosts += 12000;
          break;
        default:
          break;
      }
    });
  
    // Calculate total budget
    var totalBudget = baseBudget * parseInt(days) + additionalCosts;
    return totalBudget;
  }
  
  
  document.getElementById("resetSelection").addEventListener("click", function() {
    // Reset all radio buttons and checkboxes to their default state
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    radioButtons.forEach(button => {
      button.checked = false;
    });
    
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Reset the budget result
    document.getElementById("budgetResult").textContent = "Please select options and click 'Calculate Budget'.";
  });