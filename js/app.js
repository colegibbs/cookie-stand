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
//Dubia: same specs
//paris:same specs
//lima: same specs
//call random number method for all locations
//call 
