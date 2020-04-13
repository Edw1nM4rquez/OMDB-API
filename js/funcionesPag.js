function buscarPorTituloP(pagina){
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
       
        var totalPaginas=Math.round(myObj.totalResults/10);
        var et=paginacion(totalPaginas);
        console.log(et);
        document.getElementById("peliculas").innerHTML = peliculas;
        document.getElementById("paginas").innerHTML = et;
      }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=34d19580&s="+titulo+'&page='+pagina, true);
    xmlhttp.send();
}


function paginacion(numeroP){
    console.log(numeroP);
    var paginas=' <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>';
    for (var i = 1; i  < numeroP+1; i++) {
        paginas+='<li class="page-item" onclick="buscarPorTituloP('+i+')"><a class="page-link" href="#">'+i+'</a></li>';
     }
     paginas+='<li class="page-item"><a class="page-link" href="#">Next</a></li>';
return paginas;
}


function detalle(imdbID){
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var titulo=myObj.Title;

        var det='<h2>Detalles</h2>'+
       ' <table style="width:100%">'+
          '<tr><th>Titulo :</th><td>'+myObj.Title+'</td></tr>'+
          '<tr><th>Año :</th><td>'+myObj.Year+'</td></tr>'+
          '<tr><th>Nominal :</th> <td>'+myObj.Rated+'</td></tr>'+
          '<tr><th>Liberado</th><td>'+myObj.Released+'</td></tr>'+
          '<tr><th>Tiempo de ejecucion :</th><td>'+myObj.Runtime+'</td></tr>'+
          '<tr><th>Genero :</th><td>'+myObj.Genre+'</td></tr>'+
          '<tr><th>Director :</th><td>'+myObj.Director+'</td></tr>'+
          '<tr><th>Escritor :</th><td>'+myObj.Writer+'</td></tr>'+
          '<tr> <th>Actores :</th><td>'+myObj.Actors+'</td></tr>'+
          '<tr><th>Trama :</th><td>'+myObj.Plot+'</td></tr>'+
          '<tr><th>Idioma :</th><td>'+myObj.Language+'</td></tr>'+
          '<tr><th>Pais :</th><td>'+myObj.Country+'</td></tr>'+
          '<tr> <th>Premios :</th><td>'+myObj.Awards+'</td></tr>'+
          '<tr><th>Metascore :</th><td>'+myObj.Metascore+'</td></tr>'+
          '<tr><th>imdbRating :</th><td>'+myObj.imdbRating+'</td></tr>'+
         ' <tr><th>imdbVotes :</th><td>'+myObj.imdbVotes+'</td></tr>'+
         ' <tr><th>imdbID :</th><td>'+myObj.imdbID+'</td></tr>'+
          '<tr><th>Tipo :</th><td>'+myObj.Type+'</td></tr>'+
          '<tr><th>DVD :</th><td>'+myObj.DVD+'</td></tr>'+
          '<tr><th>Taquilla :</th><td>'+myObj.BoxOffice+'</td></tr>'+
         ' <tr><th>Produccion :</th><td>'+myObj.Production+'</td></tr>'+
          '<tr><th>Sitio web :</th><td>'+myObj.Website+'</td></tr>'+
          '<tr><th>Respuesta :</th><td>'+myObj.Response+'</td></tr></table>';       
        console.log(titulo);
        document.getElementById("exampleModalCenterTitle").innerHTML = titulo;
        document.getElementById("detalles").innerHTML = det;

      }
    };

    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=34d19580&i="+imdbID+'&plot=full', true);
    xmlhttp.send();

}
