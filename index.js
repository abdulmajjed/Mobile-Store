'use strict';

let parent = document.getElementById('parent');
let tableElement = document.getElementById('table');
parent.appendChild(tableElement);
let form = document.getElementById('form');
let container =document.getElementById('container');
container.addEventListener('submit',submitter);
form.addEventListener('submit',submitter);
let allTypes=[];
console.log(allTypes);
//********** Constructer Function ************//
function Mobile (name,type){
  this.name=name;
  this.type=type;
  this.condition=this.condition;
  this.price= getRandomPrice(100,500);
  
    allTypes.push(this);
    //caling
    updateStorage();

}



//********* Function Random number ************/
function getRandomPrice(min,max){
    min=ceil(min);
    max=ceil(max);
    return Math.floor(Math.random()*500) +100 ;
}




// ************ protoTyppe *******************/



Mobile.prototype.render(){
    let user = document.createElement('td');
    let type = document.createElement('td');
    let price = document.createElement('td');
    let Condition = document.createElement('td');

    
    let tableRow = document.createElement('tr');

    user.textContent=this.user;
    type.textContent=this.type;
    price.textContent= getRandomPrice(100,500);
    if (getRandomPrice>=200){
        condition.textContent='New';
    }else{
        condition.textContent='Used';
    }


    tableRow.appendChild(user);
    tableRow.appendChild(type);
    tableRow.appendChild(price);
    tableRow.appendChild(condition);


    tableElement.appendChild(tableRow);
}

// Mobile.prototype.render=function (){
//     let tableRow = document.createElement('tr');
//     let tableData = document.createElement('td');
//         tableData.textContent=this.name;
//         tableRow.appendChild(tableData);

//     let tableData = document.createElement('td');
//     tableData.textContent=this.type;

//     let tableData = document.createElement(td);
//     tableData.textContent=getRandomPrice();

//         if(getRandomPrice>=200){
//             let tableData = document.createElement('td');
//             tableData.textContent='New';
//         }else{
//             let tableData = document.createElement('td');
//             tableData.textContent='Used';
//         }

//     tableElement.appendChild(tableRow);    
// }
//***************** Render ********************/
function renderHeader(){
    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');

        tableData.textContent='User';
        tableRow.appendChild(tableData);

    let tableData = document.createElement('td');
        tableData.textContent='Type';
        tableRow.appendChild(tableData);

    let tableData = document.createElement(td);
        tableData.textContent='Price';
        tableRow.appendChild(tableData);

    let tableData = document.createElement('td');
        tableData.textContent='Condition';
        tableRow.appendChild(tableData);

    tableElement.appendChild(tableRow);
}




//******** local Storage ***************/
function updateStorage(){
    let phone = JSON.stringify(allTypes);
    localStorage.setItem('type', phone);

}

function getData(){

    let data = localStorage.getItem(type);
    let newData = JSON.parse(data);
    if (type){
        for (let i = 0 ; i < type.length; i++){
        newData(type[i].user,type[i].type,type[i].price,type[i].condition);
    
        }
    }
}
getData();
    for (let i=0 ; i <type.length ; i++){
        type.render();
    }
//*************** submitter  ******************//

function submitter(event){
    event.preventDefault();

    let user=event.target.user.value;
    let type=event.target.type.value;
    
    let addNewPhone = new Mobile(user,type)
    addNewPhone.render()


}

//********* calling Fun ************//
renderHeader();
// renderFooter();



