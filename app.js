window.addEventListener('DOMContentLoaded', function(){
    // Restart - Refresh TPN Calculator

    document.querySelector("#reset").addEventListener("click", () => location.reload());

    // Convert Pounds to Kilograms

    const convertWt = (weight) => (weight / 2.2).toFixed(2); 

    // Macronutrient Fluid Volume

    const dextrose = dexGrams => Math.ceil((dexGrams * 100) / 70);
    const protein = proGrams => Math.ceil((proGrams * 100) / 10);
    const lipids = lipGrams => Math.ceil((lipGrams * 100) / 20);

    // Time - multiply hours input * 60 minutes/hr / 1000

    const time = (hours) => ((hours * 60) / 1000).toFixed(2);

    // Calculate all macronutrients - total calories

    const calories = (dexCal, proCal, lipCal) => parseInt((dexCal * 3.4) + (proCal * 4) + (lipCal * 10));

    // Calculate Glucose Infusion Rate

    const calculateGIR = (dexGram, weight, hours) => ((dexGram / weight) / hours).toFixed(2);

    // TPN Function

    const tpn = () => {
      const weightInput = document.querySelector("#weight").value;
      const lbValue = parseInt(weightInput);
      const caloriesText = document.getElementById("calories");
      const caloriesKg = document.getElementById("calories-kg");
      const caloriesPro = document.getElementById("protein-kg");
      const fluidml = document.getElementById("fluidml");
      const fluidLiters = document.getElementById("fluidliters");
      const gir = document.getElementById("gir");
      const gramsDex = +document.getElementById("dextroseInput").value;
      const gramsPro = +document.getElementById("proteinInput").value;
      const gramsLip = +document.getElementById("lipidsInput").value;
      const hours = document.getElementById("hours");
      const tpnHours = +document.querySelector("#hoursInput").value;

      // Calculations 
      const totalFluids = dextrose(gramsDex) + protein(gramsPro) + lipids(gramsLip);
      const total = parseInt(totalFluids + 150);
      const poundsToKg = convertWt(lbValue);
      const totalCalories = calories(gramsDex, gramsPro, gramsLip);
      const caloriesPerKg = (totalCalories / poundsToKg).toFixed(1);
      const girTotal = calculateGIR(gramsDex, poundsToKg, time(tpnHours));
      const proteinPerKg = (gramsPro / poundsToKg).toFixed(2);

      // Result Output
      fluidml.textContent = total;
      fluidLiters.textContent = (total / 1000).toFixed(2);
      hours.textContent = tpnHours;
      gir.textContent = girTotal;
      caloriesText.textContent = totalCalories;
      caloriesKg.textContent = caloriesPerKg;
      caloriesPro.textContent = proteinPerKg;
    }

    const weightInput = document.querySelector("#weight").value;
    const lbValue = parseInt(weightInput);

    document.querySelector("#calculate").addEventListener("click", () => {
      lbValue === '' || lbValue <= 0 ? alert('Please type in a weight in pounds') : tpn();
    });
  }
);