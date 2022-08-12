/*console.log('hellow');
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px black';
var input=document.querySelector('input');
input.value='hellow now';
var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';
var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='pink';
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='change';
 odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="red";
    even[i].style.backgroundColor="black";
}*/
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.color='pink';
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility='hidden';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';
odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}
