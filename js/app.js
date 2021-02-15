'use strict'; 
let hour =['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let numberofcookies=[];

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
        Lima.hourlyTotals();


