'use strict';

// create dom window
//seattle object: min customers per hr, max customers per hour, avg cookies per customer, method for random customer generator, empty arry for cookes purchased per hour based on random customer number
let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custGenerator: function(){
    return Math.floor(Math.random() * (this.maxCustPerHourmax - this.minCustPerHourmin + 1) + this.minCustPerHourmin);
  }
}
//Tokyo object: same specs
let tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custGenerator: function(){
    return Math.floor(Math.random() * (this.maxCustPerHourmax - this.minCustPerHourmin + 1) + this.minCustPerHourmin);
  }
}
//Dubia: same specs
let dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custGenerator: function(){
    return Math.floor(Math.random() * (this.maxCustPerHourmax - this.minCustPerHourmin + 1) + this.minCustPerHourmin);
  }
}
//paris:same specs
let paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custGenerator: function(){
    return Math.floor(Math.random() * (this.maxCustPerHourmax - this.minCustPerHourmin + 1) + this.minCustPerHourmin);
  }
}
//lima: same specs
let lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custGenerator: function(){
    return Math.floor(Math.random() * (this.maxCustPerHourmax - this.minCustPerHourmin + 1) + this.minCustPerHourmin);
  }
}
//call random number method for all locations
//call 
