const evForm = document.getElementById('ev-form');
const evResults = document.getElementById('ev-results');

const iceForm = document.getElementById('ice-form');
const iceResults = document.getElementById('ice-results');

function calculateEvCosts(carName, realWorldRange, batteryCapacity, unitChargeCost, parkingCost, speedOfCharge){
  // Calculate charging cost
  const chargingCost = batteryCapacity * unitChargeCost;

  // Calculate parking cost per charge
  const parkingCostPerCharge = (batteryCapacity / speedOfCharge) * parkingCost;

  // Calculate total cost per charge (charging + parking)
  const totalCostPerCharge = chargingCost + parkingCostPerCharge;

  // Calculate cost per kilometer
  const costPerKm = totalCostPerCharge / realWorldRange;

  // Calculate cost for 1000 km
  const costFor1000km = costPerKm * 1000;

  // Display results
  evResults.innerHTML = `<h3>${carName} Results</h3>
    <ul>
        <li>Charging Cost: ${chargingCost.toFixed(2)} SEK</li>
        <li>Parking Cost (per charge): ${parkingCostPerCharge.toFixed(2)} SEK</li>
        <li>Total Cost (per charge): ${totalCostPerCharge.toFixed(2)} SEK</li>
        <li>Cost per Kilometer: ${costPerKm.toFixed(2)} SEK/km</li>
        <li>Estimated Cost for 1000km: ${costFor1000km.toFixed(2)} SEK</li>
    </ul>`;
}

function calculcateIceCosts(carName, fuelConsumption, costPerLitre, fuelTankCapacity){
  // Calculate total litres needed for 1000 km
  const totalLitres = 1000 / fuelConsumption;

  // Calculate total cost for 1000 km
  const totalCost = totalLitres * costPerLitre;

  // Calculate cost per kilometer
  const costPerKm = totalCost / 1000;

  // Calculate number of refills needed
  const numRefills = Math.ceil(totalLitres / fuelTankCapacity);

  // Display results
  iceResults.innerHTML = `<h3>${carName} Results</h3>
    <ul>
        <li>Total Litres for 1000km: ${totalLitres.toFixed(2)} L</li>
        <li>Total Cost for 1000km: ${totalCost.toFixed(2)} SEK</li>
        <li>Cost per Kilometer: ${costPerKm.toFixed(2)} SEK/km</li>
        <li>Number of Refills Needed: ${numRefills}</li>
    </ul>`;
}

evForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const carName = document.getElementById('car-name').value;
  const realWorldRange = parseFloat(document.getElementById('real-world-range').value);
  const batteryCapacity = parseFloat(document.getElementById('battery-capacity').value);
  const unitChargeCost = parseFloat(document.getElementById('unit-charge-cost').value);
  const parkingCost = parseFloat(document.getElementById('parking-cost').value);
  const speedOfCharge = parseFloat(document.getElementById('speed-of-charge').value);

  calculateEvCosts(carName, realWorldRange, batteryCapacity, unitChargeCost, parkingCost, speedOfCharge)
});

iceForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const carName = document.getElementById('ice-car-name').value;
  const fuelConsumption = parseFloat(document.getElementById('fuel-consumption').value);
  const costPerLitre = parseFloat(document.getElementById('cost-per-litre').value);
  const fuelTankCapacity = parseFloat(document.getElementById('fuel-tank-capacity').value);

  calculcateIceCosts(carName, fuelConsumption, costPerLitre, fuelTankCapacity);
});
