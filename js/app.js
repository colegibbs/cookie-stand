'use strict';

// create dom window
let salesTable = document.getElementById('sales table');
let salesData = document.getElementById('sales-data');

//Array to hold objects
let stores = [];

//hours open
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Store constructor
function Store(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cust = 0;
  this.cookiesPurchased = [];
  stores.push(this);
}

//Prototypes
//Sum prototype
Store.prototype.cookieSum = function(){
  this.totalCookies = sum(this.cookiesPurchased);
};

//random customer generator prototype
Store.prototype.custGenerator = function(){
  this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
};

//render stores prototype
Store.prototype.render = function(){
  let trElem = document.createElement('tr');
  salesTable.appendChild(trElem);
  let thElem = document.createElement('th');
  thElem.textContent = this.location;
  trElem.appendChild(thElem);

  for(let i = 0; i < hoursOpen.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesPurchased[i];
    trElem.appendChild(tdElem);
  }
  let tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookies;
  trElem.appendChild(tdElem);
};

//create arrays using constructor
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

//random number generator for random number of customers generation
function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//sum fucntion
function sum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

// header for table: times of day
function tableTimes(){
  let theadElem = document.createElement('thead');
  salesTable.appendChild(theadElem);
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Locations';
  theadElem.appendChild(th1Elem);

  for(let i = 0; i < hoursOpen.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = hoursOpen[i];
    theadElem.appendChild(thElem);
  }

  let thElem = document.createElement('th');
  thElem.textContent = 'Daily Location Total';
  theadElem.appendChild(thElem);
}

//footer for table: Totals
function hourlyTotals(){
  console.log(stores[0].cookiesPurchased[0]);
  let tfootElem = document.createElement('tfoot');
  salesTable.appendChild(tfootElem);
  let thElem = document.createElement('th');
  thElem.textContent = 'Total';
  tfootElem.appendChild(thElem);

  for(let i = 0; i < hoursOpen.length; i++){
    let sum = 0;
    for(let j = 0; j < stores.length; j++){
      sum += stores[j].cookiesPurchased[i];
    }
    let tdElem = document.createElement('td');
    tdElem.textContent = sum;
    tfootElem.appendChild(tdElem);
  }

  let sum = 0;
  for(let i = 0; i < stores.length; i++){
    sum += stores[i].totalCookies;
  }
  let tdElem = document.createElement('td');
  tdElem.textContent = sum;
  tfootElem.appendChild(tdElem);
}

//call custGenerator and create array for cookies sold for each city and renders content
function cookiesSoldAndRender(stores){
  for(let i = 0; i < stores.length; i++){
    let store = stores[i];
    for(let j = 0; j < 14; j++){
      store.custGenerator();
      let cookies = Math.ceil(Number(store.cust) * Number(store.avgCookiesPerCust));
      store.cookiesPurchased.push(cookies);
    }
    store.cookieSum();
  }
  tableTimes();
  for(let i = 0; i < stores.length; i++){
    stores[i].render();
  }
  hourlyTotals();
}

function handleSubmit(event) {
  event.preventDefault();
  let location = event.target.location.value;
  let minCustPerHour = parseInt(event.target.minCustPerHour.value);
  let maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  let avgCookiesPerCust = Number(event.target.avgCookiesPerCust.value);
  console.log(avgCookiesPerCust);

  stores.push(new Store(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust));

  let store = stores[stores.length - 1];
  for(let j = 0; j < 14; j++){
    store.custGenerator();
    console.log('form: ', store.cust);
    let cookies = Math.ceil(Number(store.cust) * Number(store.avgCookiesPerCust));
    store.cookiesPurchased.push(cookies);
  }
  store.cookieSum();
  store.render();
}

salesData.addEventListener('submit', handleSubmit);

cookiesSoldAndRender(stores);
