'use strict';

// create dom window
//seattle object: min customers per hr, max customers per hour, avg cookies per customer, method for random customer generator, empty arry for cookes purchased per hour based on random customer number
let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  cust: 0,
  cookiesPurchased: [],
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};
//Tokyo object: same specs
let tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  cust: 0,
  cookiesPurchased: [],
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};
//Dubia: same specs
let dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  cust: 0,
  cookiesPurchased: [],
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};
//paris:same specs
let paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  cust: 0,
  cookiesPurchased: [],
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};
//lima: same specs
let lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  cust: 0,
  cookiesPurchased: [],
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};
//call custGenerator and create array for cookies sold for each city
function cookiesSold(){
  let cities = [seattle, tokyo, dubai, paris, lima];
  for(let i = 0; i < cities.length; i++){
    let city = cities[i];
    for(let j = 0; j < 14; j++){
      city.custGenerator();
      let cookies = Math.ceil(Number(city.cust) * Number(city.avgCookiesPerCust));
      city.cookiesPurchased.push(cookies);
    }
  }
}

function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

cookiesSold();

console.log(seattle.cookiesPurchased);
console.log(tokyo.cookiesPurchased);
console.log(dubai.cookiesPurchased);
console.log(paris.cookiesPurchased);
console.log(lima.cookiesPurchased);
//call
