//function contador de likes
/*var i = 0;
function contador()
{
i = i + 1;
var btn = document.getElementById("boton");
btn.value = "" + i + "";
}*/


//function contador de likes
/*var i = 0;
   function contador(){
   if(i+= 1){ 
   //var btn = document.getElementById("boton");
   console.log( btn.value = "" + i + "");
   }
   else{
   }
};*/

document.getElementById("botonLike").addEventListener("click", contador);

function cambiar(){
    if (document.getElementById('botonLike').src == "https://cdn4.iconfinder.com/data/icons/like-18/32/459-01-512.png")
    {
        document.getElementById('botonLike').src = "https://yokoent.com/images/thumbs-up-png-red-1.png";
    }
    else
    {
        document.getElementById('botonLike').src = "https://cdn4.iconfinder.com/data/icons/like-18/32/459-01-512.png";
    }    
};