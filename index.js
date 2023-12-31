var list=[];
list=document.querySelectorAll("button");

for(var i=0;i<list.length;i++)
{
    list[i].addEventListener("click",whenClicked);
}

function whenClicked()
{
   var buttonName= this.innerHTML;
    buttonAnimation(buttonName);
   switch(buttonName)
   {


    case "w":
        var audio=new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "a":
        var audio=new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
         var audio=new Audio('./sounds/tom-3.mp3');
         audio.play();
         break;
    case "d":
         var audio=new Audio('./sounds/tom-4.mp3');
         audio.play();
         break;
    case "j":
         var audio=new Audio('./sounds/snare.mp3');
         audio.play();
         break;
    case "k":
         var audio=new Audio('./sounds/crash.mp3');
         audio.play();
         break;
    case "l":
         var audio=new Audio('./sounds/kick-bass.mp3');
         audio.play();
         break;
    default:
        break;

   }

}



document.addEventListener("keydown",function(event)
{
    var buttonName= event.key;
    buttonAnimation(buttonName);
    switch(buttonName)
    {
 
 
     case "w":
         var audio=new Audio('./sounds/tom-2.mp3');
         audio.play();
         break;
     case "a":
         var audio=new Audio('./sounds/tom-2.mp3');
         audio.play();
         break;
     case "s":
          var audio=new Audio('./sounds/tom-3.mp3');
          audio.play();
          break;
     case "d":
          var audio=new Audio('./sounds/tom-4.mp3');
          audio.play();
          break;
     case "j":
          var audio=new Audio('./sounds/snare.mp3');
          audio.play();
          break;
     case "k":
          var audio=new Audio('./sounds/crash.mp3');
          audio.play();
          break;
     case "l":
          var audio=new Audio('./sounds/kick-bass.mp3');
          audio.play();
          break;
     default:
         break;
 
    }
});


function buttonAnimation(currentkey)
{
    var activeButton= document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");


    setTimeout(function()
    {
    activeButton.classList.remove("pressed");

    },100);

}

// var audio=new Audio('./sounds/tom-2.mp3');
// audio.play();