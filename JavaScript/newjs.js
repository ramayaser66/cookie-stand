'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', "Total Daily"];

var allLocations = [];

function AllObjects(passedName, passedMinHourlyCoustmer, passedMaxHourlyCoustmer, passedAverageCookiesPerCustomer) {
   this.name = passedName;
   this.minHourlyCoustmer = passedMinHourlyCoustmer;
   this.maxHourlyCoustmer = passedMaxHourlyCoustmer;
   this.averageCookiesPerCustomer = passedAverageCookiesPerCustomer;
   this.arrayPerDay = [];
   this.totalResult = 0;
   this.dailytotal = 0;
   this.sideTotal = 0;
   allLocations.push(this);

}

// calculate the random cookies
AllObjects.prototype.randomNumberA = function () {
    return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
 }

 // fill the array with number of cookies per hour
AllObjects.prototype.mathPart = function () {
    for (var i = 0; i < hours.length-1; i++) {
       var rand = this.randomNumberA();
       var multiplication = Math.floor(this.averageCookiesPerCustomer * rand);
       this.arrayPerDay[i] = multiplication;
       this.totalResult = this.totalResult + multiplication;
       
    }
    //console.log(this.totalResult );
    this.arrayPerDay.push(this.totalResult);
 }

var parentElement = document.getElementById("content");
var h2 = document.createElement("h2");
h2.textContent = "Sales Table";
parentElement.appendChild(h2);

var table = document.createElement("table");
parentElement.appendChild(table);

function firstRaw() {
   var rowOne = document.createElement("tr");
   table.appendChild(rowOne);
   var rowOneHoureTitle = document.createElement("th");
   rowOneHoureTitle.textContent = "Times";
   rowOne.appendChild(rowOneHoureTitle);

   for (var x = 0; x < hours.length; x++) {
      var rowOneHoure = document.createElement("th");
      rowOneHoure.textContent = hours[x];
      rowOne.appendChild(rowOneHoure);
   }
//    var rowOneHoureTitle = document.createElement("th");
//    rowOneHoureTitle.textContent = "Total Daily";
//    rowOne.appendChild(rowOneHoureTitle);
}

 
AllObjects.prototype.tableFunction = function () {
   var rowTwo = document.createElement("tr");
   table.appendChild(rowTwo);
   var rowOneName = document.createElement("th");
   rowOneName.textContent = this.name;
   rowTwo.appendChild(rowOneName);
   var rawTotal = 0;
   for (var x = 0; x < hours.length; x++) {
      var rowTwoData = document.createElement("td");
      rowTwoData.textContent = this.arrayPerDay[x];
      rowTwo.appendChild(rowTwoData);
      rawTotal += this.arrayPerDay[x];
   }
//    var lastcolumn = document.createElement("td");
//    lastcolumn.textContent = rawTotal;
//    rowTwo.appendChild(lastcolumn);
//    this.sideTotal = rawTotal;

}

var locationOne = new AllObjects('Seattle', 23, 65, 6.3);
var locationTWO = new AllObjects('Tokyo', 3, 24, 1.2);
var locationThree = new AllObjects('Dubai', 11, 38, 3.7);
var locationFour = new AllObjects('Paris', 20, 38, 2.3);
var locationFive = new AllObjects('Lima', 2, 16, 4.6);
var sumationDATA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// var allLocations = [locationOne, locationTWO, locationThree, locationFour, locationFive];
console.log(allLocations);
var totalraw = 0;

AllObjects.prototype.gatAllCookies = function () {

    for (var x = 0; x < this.arrayPerDay.length-1; x++) {
       sumationDATA[x] = sumationDATA[x] + this.arrayPerDay[x];
       //console.log(sumationDATA[x]);
    }
    console.log(sumationDATA);
 }
 var sum = 0;
 function total() {
    var footerRaw = document.createElement('tr');
    footerRaw.setAttribute("id","tablefooter");
    table.appendChild(footerRaw);
    var footHead = document.createElement('th');
    footHead.textContent = 'Total';
    footerRaw.appendChild(footHead);

    for (var r1 = 0; r1< hours.length; r1++) {
        sum = sum + sumationDATA[r1];
     }

     sumationDATA[sumationDATA.length-1] = sum;

    for (var r = 0; r < hours.length; r++) {
       var sumDataPerHour = document.createElement("td");
       sumDataPerHour.textContent = sumationDATA[r];
       footerRaw.appendChild(sumDataPerHour);
    
    }
    // console.log(sum);
    
    // console.log(sumationDATA);
    // var sumDataPerHour1 = document.createElement("td");
    // sumDataPerHour1.textContent = sumationDATA[sumationDATA.length - 1];
    // footerRaw.appendChild(sumDataPerHour1);
 }

 
function functionOfObject() {
    for (var x = 0; x < allLocations.length; x++) {
       allLocations[x].mathPart();
       //console.log(allLocations[x]);
       allLocations[x].tableFunction();
       allLocations[x].gatAllCookies();
    }
 }
 firstRaw();
 functionOfObject();
var newLocationStand;
 var locationForm = document.getElementById("newLocation");
 locationForm.addEventListener("submit", function (event) {
   event.preventDefault();

   var locationName = event.target.locatin.value;
   var minNumb = event.target.minNumber.value;
   var maxNumb = event.target.maxNumber.value;
   var avgr = event.target.avg.value;


    newLocationStand = new AllObjects(locationName, minNumb, maxNumb, avgr);
   // console.log(newLocationStand); 
   // console.log(allLocations); 


   
   newLocationStand.mathPart();
   newLocationStand.tableFunction();
   newLocationStand.gatAllCookies();
   total();
    var row = document.getElementById("tablefooter");
    row.innerHTML = "" ;


});

total();
