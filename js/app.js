'use strict';

// create dom window
let citySales = document.getElementById('city sales');

//Store constructor
function Store(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  cust: 0;
  cookiesPurchased: [];

}

//Prototypes


//seattle object: min customers per hr, max customers per hour, avg cookies per customer, method for random customer generator, empty arry for cookes purchased per hour based on random customer number
let seattle = {
  location: 'Seattle',
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
  location: 'Tokyo',
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
  location: 'Dubai',
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
  location: 'Paris',
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
  location: 'Lima',
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

//call custGenerator and create array for cookies sold for each city and renders content
function cookiesSoldAndRender(){
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
  for(let i = 0; i < cities.length; i++){
    cities[i].render();
  }
}

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

//creates render method in object seattle
seattle.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  citySales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  citySales.appendChild(ulElem);

  let num = 0;
  for(let j = 6; j < 20; j++){
    let liElem = document.createElement('li');

    if(j <= 11){
      liElem.textContent = `${j}am:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else if(j === 12){
      liElem.textContent = `${j}pm:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else {
      liElem.textContent = `${j - 12}pm: ${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    num++;
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
};

//creates render method in object tokyo
tokyo.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  citySales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  citySales.appendChild(ulElem);

  let num = 0;
  for(let j = 6; j < 20; j++){
    let liElem = document.createElement('li');

    if(j <= 11){
      liElem.textContent = `${j}am:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else if(j === 12){
      liElem.textContent = `${j}pm:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else {
      liElem.textContent = `${j - 12}pm: ${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    num++;
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
};

//creates render method in object dubai
dubai.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  citySales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  citySales.appendChild(ulElem);

  let num = 0;
  for(let j = 6; j < 20; j++){
    let liElem = document.createElement('li');

    if(j <= 11){
      liElem.textContent = `${j}am:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else if(j === 12){
      liElem.textContent = `${j}pm:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else {
      liElem.textContent = `${j - 12}pm: ${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    num++;
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
};

//creates render method in object paris
paris.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  citySales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  citySales.appendChild(ulElem);

  let num = 0;
  for(let j = 6; j < 20; j++){
    let liElem = document.createElement('li');

    if(j <= 11){
      liElem.textContent = `${j}am:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else if(j === 12){
      liElem.textContent = `${j}pm:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else {
      liElem.textContent = `${j - 12}pm: ${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    num++;
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
};

//creates render method in object lima
lima.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  citySales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  citySales.appendChild(ulElem);

  let num = 0;
  for(let j = 6; j < 20; j++){
    let liElem = document.createElement('li');

    if(j <= 11){
      liElem.textContent = `${j}am:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else if(j === 12){
      liElem.textContent = `${j}pm:${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    else {
      liElem.textContent = `${j - 12}pm: ${this.cookiesPurchased[num]} cookies`;
      ulElem.appendChild(liElem);
    }
    num++;
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
};

//call
cookiesSoldAndRender();
