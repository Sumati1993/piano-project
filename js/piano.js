let keyCheck=document.querySelector('.keys-checkbox input');
let pianoKeys=document.querySelectorAll('.key');

let allKeys=[];
let audio=new Audio('tunes/a.wav');

//to hide/display key values
keyCheck.addEventListener('click',function(e){
    pianoKeys.forEach(key=>{
        key.classList.toggle("hide");               //toggle is a function. it adds/removes hide class to the elements 
    })
});

//handler to identify the key event
pianoKeys.forEach(item=>{
    // console.log(item.dataset.key);      //shows the value of data-key
    allKeys.push(item.dataset.key);         //the value of data-key is pushed into the array allKeys[]
    // console.log('all keys= ',allKeys);
    item.addEventListener('click',()=>{
        // console.log('clicked key = ',item.dataset.key);         //shows only the key which is clicked(because od the event listener click)
    playTune(item.dataset.key);
    });
});
function playTune(key)
{
    // console.log('tune key = ',key);
    audio.src=`tunes/${key}.wav`;
    audio.play();

    //matching the data-key with the tunes
    const clickedKey=document.querySelector(`[data-key= "${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");              //active class is removed after 150ms
    },150);
}

//to play from keyboard
document.addEventListener('keydown',function(e){
    playTune(e.key);                //e is the index
});