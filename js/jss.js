let isShow = false;
$(document).ready(()=>{ /*Fundamental siempre poner las funciones dentro de esto, y si es posible las variables para
                          evitar problemas con funciones que requieran uso de elementos del HTML que no se hayan cargado
                          o que no se hayan cargado correctamente. */

  //console.log("Pagina cargada");

  // $("#mostrar").click(()=>{  // Borrar a la hora de entregar 
  //   //console.log("Funciona");
  //   $("#flotante").slideDown("slow");
  // });

  // $("#cerrar").click(()=>{  // Borrar a la hora de entregar
  //   //console.log("Funciona");
  //   $("#flotante").slideUp("slow");
  // });

  $("#showIndex").click(()=>{
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
});

