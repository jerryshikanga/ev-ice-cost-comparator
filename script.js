const evForm = document.getElementById('ev-form');
const evResults = document.getElementById('ev-results');

const iceForm = document.getElementById('ice-form');
const iceResults = document.getElementById('ice-results');

// Common function to get distance from the form
function getDistance() {
    return parseFloat(document.getElementById('distance').value);
}

function calculateEvCosts(carName, realWorldRange, batteryCapacity, unitChargeCost, distance){
  const kwhPerKm = batteryCapacity / realWorldRange;

  const totalkwh = kwhPerKm * distance;

  // Calculate charging cost
  const chargingCost = batteryCapacity * unitChargeCost;

  // Calculate cost per kilometer
  const costPerKm = chargingCost / realWorldRange;

  // Calculate cost for distance
  const costForDistance = costPerKm * distance;

    document.getElementById('ev-results').innerHTML = `
    <h3>${carName} Results</h3>
    <ul>
        <li>Total Cost : ${costForDistance.toFixed(2)} SEK</li>
        <li>Distance: ${distance} km</li>
        <li>Total Kwh: ${totalkwh.toFixed(2)} kwh</li>
        <li>Cost per Kilometer: ${(costForDistance / distance).toFixed(2)} SEK/km</li>
    </ul>`;
}

function calculcateIceCosts(carName, fuelConsumption, costPerLitre, distance){
  // Calculate total litres needed for 1000 km
  const totalLitres = distance / fuelConsumption;

  // Calculate total cost for 1000 km
  const totalCost = totalLitres * costPerLitre;

  // Calculate cost per kilometer
  const costPerKm = totalCost / distance;

  // Calculate cost for distance
  const costForDistance = costPerKm * distance;

  // Display results
  iceResults.innerHTML = `
    <h3>${carName} Results</h3>
    <ul>
        <li>Total Cost : ${costForDistance.toFixed(2)} SEK</li>
        <li>Distance : ${distance} km</li>
        <li>Total Litres : ${totalLitres.toFixed(2)} L</li>
        <li>Cost per Kilometer: ${costPerKm.toFixed(2)} SEK/km</li>
    </ul>`;
}

evForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const carName = document.getElementById('car-name').value;
  const realWorldRange = parseFloat(document.getElementById('real-world-range').value);
  const batteryCapacity = parseFloat(document.getElementById('battery-capacity').value);
  const unitChargeCost = parseFloat(document.getElementById('unit-charge-cost').value);
  const distance = getDistance();

  calculateEvCosts(carName, realWorldRange, batteryCapacity, unitChargeCost, distance)
});

iceForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const carName = document.getElementById('ice-car-name').value;
  const fuelConsumption = parseFloat(document.getElementById('fuel-consumption').value);
  const costPerLitre = parseFloat(document.getElementById('cost-per-litre').value);
  const distance = getDistance();

  calculcateIceCosts(carName, fuelConsumption, costPerLitre, distance);
});
