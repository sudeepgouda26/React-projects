var buttons=document.querySelectorAll(".add");

buttons=[];
   
buttons.forEach(function(button){
   button.addEventListener("click",function(){
      
         buttons.push=(button);
      
   });
});
