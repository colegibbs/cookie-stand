'use strict';

// create dom window
let citySales = document.getElementById('city sales');

//seattle object: min customers per hr, max customers per hour, avg cookies per customer, method for random customer generator, empty arry for cookes purchased per hour based on random customer number
let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  cust: 0,
  cookiesPurchased: [],
  totalCookies: 0,
  cookieSum: function(){
    this.totalCookies = sum(this.cookiesPurchased);
  },
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
  totalCookies: 0,
  cookieSum: function(){
    this.totalCookies = sum(this.cookiesPurchased);
  },
  custGenerator: function(){
    this.cust = randomCust(this.minCustPerHour, this.maxCustPerHour);
  }
};

//Dubai: same specs
let dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  cust: 0,
  cookiesPurchased: [],
  totalCookies: 0,
  cookieSum: function(){
    this.totalCookies = sum(this.cookiesPurchased);
  },
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
  totalCookies: 0,
  cookieSum: function(){
    this.totalCookies = sum(this.cookiesPurchased);
  },
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
  totalCookies: 0,
  cookieSum: function(){
    this.totalCookies = sum(this.cookiesPurchased);
  },
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
    city.cookieSum();
  }
}

//random number generator for random number of customers generation
function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

cookiesSold();

console.log(seattle.cookiesPurchased);
console.log(seattle.totalCookies);
console.log(tokyo.cookiesPurchased);
console.log(tokyo.totalCookies);
console.log(dubai.cookiesPurchased);
console.log(dubai.totalCookies);
console.log(paris.cookiesPurchased);
console.log(paris.totalCookies);
console.log(lima.cookiesPurchased);
console.log(lima.totalCookies);

//call
