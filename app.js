class TPN {
  constructor(){
    this.lbValue = document.querySelector("#weight").value;
    this.gramsDex = document.getElementById("dextroseInput").value;
    this.gir = document.getElementById("gir");
    this.tpnHours = document.querySelector("#hoursInput").value;
    this.caloriesText = document.querySelector("#calories");
    this.caloriesKg = document.querySelector("#calories-kg");
    this.caloriesPro = document.querySelector("#protein-kg");
    this.proteinGrams = document.getElementById("proteinInput").value;
    this.total = dextrose() + protein() + lipids() + 150;
    this.kgValue = buttonlb() /  2.2;
    this.girTotal = (gramsDex / lbValue / time()).toFixed(2);
  }
  dextrose(){
    const dextroseCalc = Math.ceil((this.gramsDex * 100) / 70);
    return dextroseCalc
  }
  protein(){
    const proteinGrams = document.getElementById("proteinInput").value;
    const proteinCalc = Math.ceil((proteinGrams * 100) / 10);
    return proteinCalc
  }
  lipids(){
    const lipidsGrams = document.getElementById("lipidsInput").value;
    const lipidsCalc = Math.ceil((lipidsGrams * 100) / 20);
    return lipidsCalc
  }
  time(){
    const tpnHours = document.querySelector("#hoursInput").value;
    const minutes = (tpnHours  * 60) / 1000;
    return minutes
  }
  calories(){
    const dexCal = document.getElementById("dextroseInput").value * 3.4;
    const proCal = document.getElementById("proteinInput").value * 4;
    const lipCal = document.getElementById("lipidsInput").value * 10;
    const macroTotals = dexCal + proCal + lipCal;
    return macroTotals
  }
}








// FINAL CALCULATION

const calculate = document.querySelector("#calculate").addEventListener("click", function(){
  let lbValue = document.querySelector("#weight").value;
  if(lbValue === '' || lbValue === 0 || lbValue < 0) {
   alert('Please type in a weight');
  } else{
    tpn();
  }
});

// RESTART BUTTON

const reset = document.querySelector("#reset").addEventListener("click",() => location.reload());

// TPN

function tpn(){
  const gramsDex = document.getElementById("dextroseInput").value;
  const gir = document.getElementById("gir");
  const tpnHours = document.querySelector("#hoursInput").value;
  const caloriesText = document.querySelector("#calories");
  const caloriesKg = document.querySelector("#calories-kg");
  const caloriesPro = document.querySelector("#protein-kg");
  const proteinGrams = document.getElementById("proteinInput").value;
  const total = dextrose() + protein() + lipids() + 150;
  const lbValue = buttonlb() /  2.2;
  const girTotal = (gramsDex / lbValue / time()).toFixed(2);
  fluidml.textContent = total;
  fluidliters.textContent = (total / 1000).toFixed(2);
  hours.textContent = tpnHours;
  gir.textContent = girTotal;
  caloriesText.textContent = calories();
  caloriesKg.textContent = (calories() / lbValue).toFixed(1);
  caloriesPro.textContent = (proteinGrams / lbValue).toFixed(1);
}

// DEXTROSE

function dextrose(){
  const dextroseGrams = document.getElementById("dextroseInput").value;
  const dextroseCalc = Math.ceil((dextroseGrams * 100) / 70);
  return dextroseCalc
} dextrose();

// PROTEIN

function protein(){
  const proteinGrams = document.getElementById("proteinInput").value;
  const proteinCalc = Math.ceil((proteinGrams * 100) / 10);
  return proteinCalc
} protein();

// LIPIDS

function lipids(){
  const lipidsGrams = document.getElementById("lipidsInput").value;
  const lipidsCalc = Math.ceil((lipidsGrams * 100) / 20);
  return lipidsCalc
} lipids();

// TIME

function time(){
  const tpnHours = document.querySelector("#hoursInput").value;
  const minutes = (tpnHours  * 60) / 1000;
  return minutes
} time();

// BUTTON POUNDS

function buttonlb() {
  let lbValue = document.querySelector("#weight").value;
  
  return lbValue
} buttonlb();


// CALORIES

function calories(){
  const dexCal = document.getElementById("dextroseInput").value * 3.4;
  const proCal = document.getElementById("proteinInput").value * 4;
  const lipCal = document.getElementById("lipidsInput").value * 10;
  const macroTotals = dexCal + proCal + lipCal;
  return macroTotals
} calories();