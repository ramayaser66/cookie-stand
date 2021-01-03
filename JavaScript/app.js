'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var locationSeattle = {
 name: "Seattle",
   minHourlyCoustmer: 23,
   maxHourlyCoustmer: 65,
   averageCookiesPerCustomer: 6.3,
   arrayPerDay:[],
   totalResult:0,
   randomNumberA: function () {
      return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
   }
};


var locationTokyo = {
   name: "Tokyo", 
   minHourlyCoustmer: 3,
   maxHourlyCoustmer: 24,
   averageCookiesPerCustomer: 1.2,
   arrayPerDay:[],
   totalResult:0,
   randomNumberA: function () {
      return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
   }
};


var locationDubai = {
   name: "Dubai", 
   minHourlyCoustmer: 11,
   maxHourlyCoustmer: 38,
   averageCookiesPerCustomer: 3.7,
   arrayPerDay:[],
   totalResult:0,
   randomNumberA: function () {
      return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
   }
};

var locationParis = {
   name: "Paris", 
   minHourlyCoustmer: 20,
   maxHourlyCoustmer: 38,
   averageCookiesPerCustomer: 2.3,
   arrayPerDay:[],
   totalResult:0,
   randomNumberA: function () {
      return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
   }
};

var locationLima = {
  name: "Lima", 
   minHourlyCoustmer: 2,
   maxHourlyCoustmer: 16,
   averageCookiesPerCustomer: 4.6,
   arrayPerDay:[],
   totalResult:0,
   randomNumberA: function () {
      return Math.floor(Math.random() * (this.maxHourlyCoustmer - this.minHourlyCoustmer) + this.minHourlyCoustmer);
   }
};


var arrayloctation = [locationSeattle, locationTokyo, locationDubai, locationParis, locationLima];

for (var j = 0; j < arrayloctation.length; j++) {
   for (var i = 0; i < hours.length; i++) {
      var rand = arrayloctation[j].randomNumberA();
      var multiplication = Math.floor(arrayloctation[j].averageCookiesPerCustomer * rand);
      arrayloctation[j].arrayPerDay[i] = hours[i] + ": "+ multiplication + " Cookies";
      arrayloctation[j].totalResult = arrayloctation[j].totalResult + multiplication;

   }
   arrayloctation[j].arrayPerDay.push("Total: "+ arrayloctation[j].totalResult + " Cookies");
   console.log(arrayloctation[j]);
 
}

var parentElement = document.getElementById("content"); 

for(var b =0; b < arrayloctation.length; b++){
   // var h2 = document.createElement('h2'); 
   // h2.textcontent = arrayloctation[b].name;
   // parentElement.appendChild(h2); 
   // var h2 = document.createElement('h2'); 
   // h2.textcontent = arrayloctation[b].name;
   // parentElement.appendChild(h2);

   var h2 = document.createElement('h2');
       h2.textContent = arrayloctation[b].name;
       parentElement.appendChild(h2);
   //console.log(arrayloctation[b].name);



   var unorderList = document.createElement('ul'); 
   parentElement.appendChild(unorderList);

   for ( var d = 0 ; d < arrayloctation[b].arrayPerDay.length; d++){
      var list = document.createElement('li'); 
      list.textContent = arrayloctation[b].arrayPerDay[d]; 
      unorderList.appendChild(list); 
   }

}

























