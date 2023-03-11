let isShow = false;
var x = 0;
$(document).ready(()=>{ /*Fundamental siempre poner las funciones dentro de esto, y si es posible las variables para
                          evitar problemas con funciones que requieran uso de elementos del HTML que no se hayan cargado
                          o que no se hayan cargado correctamente. */
  //console.log("Pagina cargada");

  $("#showIndex").click(()=>{ //Abrir y cerrar el menú index
    if (!isShow){
      //console.log("no show");
      $("#menu-1").animate({left: '220px'}, 200); 
      isShow = true;
    } else {
      //console.log("show");
      $("#menu-1").animate({left: '0px'}, 200);
      isShow = false;
    }
    //console.log(isShow);
  });
 
//Codigo del slider
  // for next slide
  $('.btn-next').click(function(){
    x= (x<=300)?(x+100):0;
    $('figure').css('left', -x+'%');
  });


   // for prev slide
   $('.btn-prev').click(function(){
    x= (x>=100)?(x-100):400;
    $('figure').css('left', -x+'%');
  });
});

