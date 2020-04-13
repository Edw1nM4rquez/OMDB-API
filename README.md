DESARROLLO DE UNA APLICACIÓN WEB UTILIZANDO LA API DE LA BASE DE DATOS DE PELÍCULAS OMDB
1. Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.

<img src="img/arq.png" id="imgE"/>  

2. Generar una llave para consumir los servicios web de la API de OMDb.

http://www.omdbapi.com/?apikey=34d19580&i


3. Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”.

4. Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar películas y toda su información de la base de datos de OMDb.
Requisitos:
• La aplicación Web debe permitir buscar la información de las películas tanto por el nombre (listado) como por el código (id) de cada película.

- HMTL

<nav class="navbar navbar-expand-lg  bg-primary navbar-dark">
        <a class="navbar-brand" href="#">Peliculas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
        
           
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="titulo">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="buscarPorTituloP(1)">Search</button>
-           </form>
        </div>
      </nav>

      <section class="container mt-5 pt-5" >
        <div id="peliculas" class="row row-cols-1 row-cols-md-4">

            <!-- Aqui se muestran las peliculas que son recuperadas mediante ajax-->

          </div>
      </section>

- Función JavaScript

function buscarPorTituloP(pagina){
    var titulo=document.getElementById("titulo").value;
   
    var peliculas="";
    
    // La propiedad XMLHttpRequest.onreadystatechange contiene el manejador del evento que
 es invocado cuando se dispara el 
     //evento readystatechange, lo cual sucede cada vez que cambia el valor de la propiedad 
readyState de XMLHttpRequest. 
     //La retrollamada (callback) es invocada desde el hilo perteneciente a la interfaz de
 usuario.

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
    
    // JSON Parse analiza el contenido de una cadena con formato JSON y extrae los valores
    que puede almacenar en un campo o  variable

        var myObj = JSON.parse(this.responseText);
    
        myObj.Search.forEach(element => {
            peliculas += '<div class="col mb-4"><div class="card text-center"><img src='+element.Poster+
            ' class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">'+element.Title+'</h5>'+
             '<button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="detalle('+"'"+element.imdbID+"'"+')">Informacion'+
            '</button></div></div></div>';  
        });
       
        //dividimos el valor total de paginas para 10 y redondeamos le valor para
 poder realizar la paginacion por cada 10 peliculas
        var totalPaginas=Math.round(myObj.totalResults/10);
        //creamos una funcion para determinar el numero de paginas necesarias
        var et=paginacion(totalPaginas);
        console.log(et);

        document.getElementById("peliculas").innerHTML = peliculas;
        document.getElementById("paginas").innerHTML = et;
      }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=34d19580&s="+titulo+'&page='
+pagina, true);
    
    xmlhttp.send();
}


- Interfaz

<img src="img/inter.png" id="imgE"/>  

• Además, se deberá visualizar toda la información disponible (plot=full) de la base de datos de películas.
- HTML
- JavaScript
- Interfaz

• También, la aplicación deberá presentar un máximo de 5 películas por búsqueda. Es decir, si la búsqueda retorna más de 5 películas se deberá paginar los resultados.
- HTML
- JavaScript
- Interfaz

• Por último, la interfaz gráfica de aplicada debe ser intuitiva y sencilla aplicando conceptos de experiencia de usuario (justificar en el informe).



