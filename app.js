// https://calculator.swiftutors.com/sale-price-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const salePriceRadio = document.getElementById('salePriceRadio');
const itemPriceRadio = document.getElementById('itemPriceRadio');
const percentOffRadio = document.getElementById('percentOffRadio');

let salePrice;
let itemPrice = v1;
let percentOff = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

salePriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Item Price ($)';
  variable2.textContent = 'Percent Off (%)';
  itemPrice = v1;
  percentOff = v2;
  result.textContent = '';
});

itemPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Sale Price ($)';
  variable2.textContent = 'Percent Off (%)';
  salePrice = v1;
  percentOff = v2;
  result.textContent = '';
});

percentOffRadio.addEventListener('click', function() {
  variable1.textContent = 'Sale Price ($)';
  variable2.textContent = 'Item Price ($)';
  salePrice = v1;
  itemPrice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(salePriceRadio.checked)
    result.textContent = `Sale Price = ${computeSalePrice().toFixed(2)} $`;

  else if(itemPriceRadio.checked)
    result.textContent = `Item Price = ${computeItemPrice().toFixed(2)} $`;

  else if(percentOffRadio.checked)
    result.textContent = `Percent Off = ${computePercentOff().toFixed(2)} %`;
})

// calculation

function computeSalePrice() {
  return Number(itemPrice.value) - (Number(itemPrice.value) * (Number(percentOff.value) / 100));
}

function computeItemPrice() {
  return Number(salePrice.value) / (1 - (Number(percentOff.value) / 100));
}

function computePercentOff() {
  return ((Number(itemPrice.value) - Number(salePrice.value)) / Number(itemPrice.value)) * 100;
}