function writeName(){

    let p = $('#1');
    $("#1").text('Новіков Максим');
}

function showGroupAndName(){

    alert('КН-202 Максим')
}


function func1(){
    setTimeout(writeName, 5000);
    setTimeout(showGroupAndName, 10000);
}

var isWorking1 = false;
var intervalId1;

function changePicture(){
    
    if(isWorking1 == false){
        const imgLinks = [ 'photos/shrek1.jpg', 
        'photos/shrek2.jpg', 
        'photos/shrek3.jpg', ]; 
        const delay = 400; let i = 0; 
        isWorking1 = true;
        intervalId1 = setInterval(function() { 
            document.getElementById('2').src = imgLinks[i]; 
            i++; 
            if(i >= imgLinks.length) { 
                i = 0; 
            } 
        }, delay);
        
    }else{
        clearInterval(intervalId1);
        isWorking1 = false;
    }
}

var myName = 'Новіков Максим Юрійович '
$('title').text(myName);

var isWorking2 = false;
var intervalId2;
var myNameArr = Array.from(myName);
function func3(){

    if(isWorking2 == false){
        
        

        const delay = 50; 
        isWorking2 = true;
        //var i = 0; var temp;
        intervalId2 = setInterval(function() {
            
            var temp = myNameArr[0];
            for(let i = 1; i < myNameArr.length; i++){

                if(i == myNameArr.length-1){
                    myNameArr[0] = myNameArr[i];
                    myNameArr[i] = temp;
                    break;
                }

                let temp2 = myNameArr[i];
                myNameArr[i] = temp;
                temp = temp2;

            }


            var text = myNameArr.join('');
            $('title').text(text);

        }, delay);
        
    }else{
        clearInterval(intervalId2);
        isWorking2 = false;
    }

}


var isWorking3 = false;
var intervalId3;
let i = 0; let j = 1; let f = 1;
function func4(){
    
    if(isWorking3 == false){
        
        const delay = 1000; 
        isWorking3 = true;
        intervalId3 = setInterval(function() { 
            f = i + j;
            i = j;
            j = f;
            $("#1").text("Число Фібоначчі: " + f);
        }, delay);
        
    }else{
        clearInterval(intervalId3);
        isWorking3 = false;
    }
}

