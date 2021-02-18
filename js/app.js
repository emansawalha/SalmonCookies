'use strict';

let hourWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let bodyEl = document.getElementById('body');
let table = document.createElement('table');
bodyEl.appendChild(table);
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];

function Location(locationName, minCust, maxCust, AvgCookies) {
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AvgCookies = AvgCookies;
    //this.salesPerday = 0;
    this.arrCustperhour = [];
    this.arrcookiesPerHour = [];
    arr.push(this)
}

Location.prototype.generateCustomer = function () {
    for (let i = 0; i < hourWork.length; i++) {
        this.arrCustperhour.push(Math.floor(getRandom(this.maxCust, this.minCust)));
    }
}
Location.prototype.generateCookies = function () {
    for (let i = 0; i < hourWork.length; i++) {
        this.arrcookiesPerHour.push(Math.floor(this.arrCustperhour[i] * this.AvgCookies));
        //this.salesPerday= this.salesPerday +  this.arrcookiesPerHour[i];
    }
}


function headerRow() {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let emptyCell = document.createElement('th');
    tr.appendChild(emptyCell);

    let th;
    for (let i = 0; i < hourWork.length; i++) {
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hourWork[i];

    }
    {
        let dailyTotalCell = document.createElement('th');
        tr.appendChild(dailyTotalCell);
        dailyTotalCell.textContent = 'Daily location total';


    }


    Location.prototype.Render = function () {
        this.generateCustomer();
        this.generateCookies();
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let locatiotitle = document.createElement('th');
        tr.appendChild(locatiotitle);
        locatiotitle.textContent = this.locationName;
        let td;
        let total = 0;
        for (let i = 0; i < this.arrcookiesPerHour.length; i++) {
            td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = this.arrCustperhour[i];
            total = total + this.arrCustperhour[i];
        }
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = total;
    }



}
let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);


headerRow();
//seattle.Render();
//tokyo.Render();
//dubai.Render();
//paris.Render();
//lima.Render();

function footerRow() {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Total';

    /*
         let thTotal = document.createElement('th');
         tr.appendChild(thTotal)
         thTotal.textContent='Totals';
        */

    let sum;
    let megaTotal = 0;
    for (let i = 0; i < hourWork.length; i++) {
        sum = 0;

        for (let j = 0; j < arr.length; j++) {

            sum = sum + arr[j].arrcookiesPerHour[i];

        }

        megaTotal = megaTotal + sum;
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = sum;
    }
    let Ttotal = document.createElement('th');
    tr.appendChild(Ttotal);
    Ttotal.textContent = megaTotal;


}





let form = document.getElementById("cookiesForm")
form.addEventListener('submit', cookiesNew)

function cookiesNew(event) {
    let countRow = table.rows.length-1;
    event.preventDefault();
    console.log(event);

    let location = event.target.location.value;
    let minimum = event.target.mincust.value;
    minimum = parseInt(minimum)
    console.log(minimum)
    let maximum = event.target.maxcust.value;
    maximum = parseInt(maximum)
    let AvgCookie = event.target.avgcookies.value;
    AvgCookie = parseFloat(AvgCookie)
     
    let newlocation = new Location(location, minimum, maximum, AvgCookie)
    console.log(newlocation)
    table.deleteRow(countRow)
    newlocation.Render();
    footerRow();


}
//footerRow();
for(let i= 0 ; i< arr.length; i++){

arr[i].Render();

}
footerRow();


/*

let Seattle = {
branchname: 'Seattle',
minCustomr:23,
maxCustomer: 65,
avgCookies: 6.3 ,
cookiesPerHour:[],
randomNoCust: function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
},

amountscookiespurchased: function(){
    for(let i = 0; i< hour.length;i++){
    this.cookiesPerHour.push(Math.floor(this.randomNoCust(this.minCustomr,this.maxCustomer)*this.avgCookies))

    }
},

render:function(){
    let divEl = document.getElementById('cookiesperhour');
    //let El = document.getElementById('container')
    let header2= document.createElement('h2');
    divEl.appendChild(header2)
    header2.textContent=this.branchname;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    let liEl;

    for(let i = 1 ; i<this.cookiesPerHour.length;i++){
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ':' + this.cookiesPerHour[i];
        }
    }

} ,

hourlyTotals:function() {
    let divEl = document.getElementById('cookiesperhour');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

let sum = this.cookiesPerHour.reduce(function(a,b){ return a+b});
let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total : ' + sum;


liEl.textContent = 'Total : ' + sum;

}

};
Seattle.amountscookiespurchased();
console.log(Seattle.cookiesPerHour);
Seattle.render();
Seattle.hourlyTotals();

// Tokyo Branch
let Tokyo = {
branchname: 'Tokyo',
minCustomr:3,
maxCustomer: 24,
avgCookies: 1.2 ,
cookiesPerHour:[],
randomNoCust: function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
},

amountscookiespurchased: function(){
    for(let i = 0; i< hour.length;i++){
    this.cookiesPerHour.push(Math.floor(this.randomNoCust(this.minCustomr,this.maxCustomer)*this.avgCookies))

    }
},

render:function(){
    let divEl = document.getElementById('cookiesperhour');
    let header2= document.createElement('h2');
    divEl.appendChild(header2)
    header2.textContent=this.branchname;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    let liEl;

    for(let i = 1 ; i<this.cookiesPerHour.length;i++){
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i] + ':' + this.cookiesPerHour[i];
        }
    }

} ,

hourlyTotals:function() {
    let divEl = document.getElementById('cookiesperhour');
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

let sum = this.cookiesPerHour.reduce(function(a,b){ return a+b});
let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total : ' + sum;


liEl.textContent = 'Total : ' + sum;

}

};
Tokyo.amountscookiespurchased();
console.log(Tokyo.cookiesPerHour);
Tokyo.render();
Tokyo.hourlyTotals();

// Dubai Branch
let Dubai = {
    branchname: 'Dubai',
    minCustomr:3,
    maxCustomer: 24,
    avgCookies: 1.2 ,
    cookiesPerHour:[],
    randomNoCust: function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    amountscookiespurchased: function(){
        for(let i = 0; i< hour.length;i++){
        this.cookiesPerHour.push(Math.floor(this.randomNoCust(this.minCustomr,this.maxCustomer)*this.avgCookies))

        }
    },

    render:function(){
        let divEl = document.getElementById('cookiesperhour');
        let header2= document.createElement('h2');
        divEl.appendChild(header2)
        header2.textContent=this.branchname;


        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        let liEl;

        for(let i = 1 ; i<this.cookiesPerHour.length;i++){
            {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = hour[i] + ':' + this.cookiesPerHour[i];
            }
        }

    } ,

    hourlyTotals:function() {
        let divEl = document.getElementById('cookiesperhour');
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

    let sum = this.cookiesPerHour.reduce(function(a,b){ return a+b});
    let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + sum;


    liEl.textContent = 'Total : ' + sum;

    }

    };
    Dubai.amountscookiespurchased();
    console.log(Dubai.cookiesPerHour);
    Dubai.render();
    Dubai.hourlyTotals();

    //Paris branch
let Paris = {
    branchname: 'Paris',
    minCustomr:3,
    maxCustomer: 24,
    avgCookies: 1.2 ,
    cookiesPerHour:[],
    randomNoCust: function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    amountscookiespurchased: function(){
        for(let i = 0; i< hour.length;i++){
        this.cookiesPerHour.push(Math.floor(this.randomNoCust(this.minCustomr,this.maxCustomer)*this.avgCookies))

        }
    },

    render:function(){
        let divEl = document.getElementById('cookiesperhour');
        let header2= document.createElement('h2');
        divEl.appendChild(header2)
        header2.textContent=this.branchname;


        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

        let liEl;

        for(let i = 1 ; i<this.cookiesPerHour.length;i++){
            {
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = hour[i] + ':' + this.cookiesPerHour[i];
            }
        }

    } ,

    hourlyTotals:function() {
        let divEl = document.getElementById('cookiesperhour');
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

    let sum = this.cookiesPerHour.reduce(function(a,b){ return a+b});
    let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + sum;


    liEl.textContent = 'Total : ' + sum;

    }

    };
    Paris.amountscookiespurchased();
    console.log(Paris.cookiesPerHour);
    Paris.render();
    Paris.hourlyTotals();

    //Lima Branch
    let Lima = {
        branchname: 'Lima',
        minCustomr:3,
        maxCustomer: 24,
        avgCookies: 1.2 ,
        cookiesPerHour:[],
        randomNoCust: function randomValue(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        amountscookiespurchased: function(){
            for(let i = 0; i< hour.length;i++){
            this.cookiesPerHour.push(Math.floor(this.randomNoCust(this.minCustomr,this.maxCustomer)*this.avgCookies))

            }
        },

        render:function(){
            let divEl = document.getElementById('cookiesperhour');
            let header2= document.createElement('h2');
            divEl.appendChild(header2)
            header2.textContent=this.branchname;


            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);

            let liEl;

            for(let i = 1 ; i<this.cookiesPerHour.length;i++){
                {
                    let liEl = document.createElement('li');
                    ulEl.appendChild(liEl);
                    liEl.textContent = hour[i] + ':' + this.cookiesPerHour[i];
                }
            }

        } ,

        hourlyTotals:function() {
            let divEl = document.getElementById('cookiesperhour');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);

        let sum = this.cookiesPerHour.reduce(function(a,b){ return a+b});
        let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total : ' + sum;


        liEl.textContent = 'Total : ' + sum;

        }

        };
        Lima.amountscookiespurchased();
        console.log(Lima.cookiesPerHour);
        Lima.render();
    Lima.hourlyTotals();*/