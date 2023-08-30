const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const time = document.getElementById('tm1');
let num = 0;
 
const buttonClick = button1.addEventListener('click', function () {
    

     const intervale =setInterval(() => {
        console.log(num++);
        time.innerText = num;
        const buttonClickStop = button2.addEventListener('click', function () {
            clearInterval(intervale);
        })
        const buttonClickRest = button3. addEventListener('click',function(){
            clearInterval(intervale);
            time.innerText ='00';
        })
        

    }, 1000)
     
    

});



 





