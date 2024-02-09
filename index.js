
var istatus = document.querySelector('h2');
var Add = document.querySelector('button');

count=0;

Add.addEventListener("click", function(){ 
    if(count==0){
        istatus.innerHTML='Friends';
        istatus.style.color='green';
        Add.innerHTML='Remove';
        count=1;
    }
    else{
        istatus.innerHTML='Stranger';
        istatus.style.color='red';
        Add.innerHTML='Add friend';
        count=0;
    }
 });
