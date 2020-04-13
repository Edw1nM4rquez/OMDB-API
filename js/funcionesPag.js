function buscarPorTituloPel(pagina){
    var titulo=document.getElementById("titulo").value;
    var peliculas="";
    
    // La propiedad XMLHttpRequest.onreadystatechange contiene el manejador del evento que es invocado cuando se dispara el 
     //evento readystatechange, lo cual sucede cada vez que cambia el valor de la propiedad readyState de XMLHttpRequest. 
     //La retrollamada (callback) es invocada desde el hilo perteneciente a la interfaz de usuario.

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
    
    // JSON Parse analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o  variable

        var myObj = JSON.parse(this.responseText);
    
        myObj.Search.forEach(element => {
            peliculas += '<div class="col mb-4"><div class="card text-center"><img src='+element.Poster+
            ' class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">'+element.Title+'</h5>'+
             '<button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="detalle('+"'"+element.imdbID+"'"+')">Informacion'+
            '</button></div></div></div>';  
        });

        //var totalPaginas=Math.round(myObj.totalResults/10);
       // var et=PaginacionPeliculas(totalPaginas);
      //  console.log(et);
       // document.getElementById("peliculas").innerHTML = peliculas;
       // document.getElementById("paginas").innerHTML = et;
      }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=34d19580&s="+titulo+'&page='+pagina, true);
    xmlhttp.send();
}