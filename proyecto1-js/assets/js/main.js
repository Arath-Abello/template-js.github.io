$(document).ready(function () {
        //SLIDER
        // Seleccionamos la clase galeria-slider y lo guardamos dentro de una variable llamda galeria
        var galeria = $('.galeria-slider');
        // luego llamamos a la variable y le ponemos un metodo que sería .bxslider que contiene datos json 
        galeria.bxSlider({
            mode: 'fade', //modo que cambia gradualmente con un efecto de opacidad
            captions: true, //que aparezca la descripción  que se le ha dado con el title a las etiquetas <img> del slider
            slideWidth: 1000, //tamaño del contenedor(slide) max-width -> (que no se salga del contenedor)
            responsive: true
        });


    // listado de post almacenado en un json y mostrado dinamicamente( interactua con un backend y saca datos de una base de datos)
    var posts = [
        {
            title: 'titulo 1',
            date: moment().format('MMMM Do YYYY'), //moment tiene el format() que es para la fecha, las 'MMMM' son el mes y le ponemos 4 para que se vean todas las letras del mes, 'Do' el día y el ultimo es 'YYYY' sería el año (puedes ver los demas json con new date, verás que tiene diferentes vistas para la fecha)
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum laborum ducimus corrupti, eos eaque nemo, harum, magnam ipsum assumenda perferendis rerum incidunt nihil iusto recusandae commodi unde ratione? ipsum dolor sit, amet consectetur adipisicing elit. Amet debitis necessitatibus libero quo, sed voluptatum aperiam ipsum vel corporis commodi vitae modi nulla quas! Dolore asperiores, laudantium repellendus qui unde'
        },
        {
            title: 'titulo 2',
            date: moment().format('MMMM Do YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum laborum ducimus corrupti, eos eaque nemo, harum, magnam ipsum assumenda perferendis rerum incidunt nihil iusto recusandae commodi unde ratione? ipsum dolor sit, amet consectetur adipisicing elit. Amet debitis necessitatibus libero quo,'
        },
        {
            title: 'titulo 3',
            date: moment().format('MMMM Do YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum laborum ducimus corrupti, eos eaque nemo, harum, magnam ipsum assumenda perferendis rerum incidunt nihil iusto recusandae commodi unde ratione? ipsum dolor sit, amet consectetur adipisicing elit. Amet debitis necessitatibus libero quo,'
        },
        {
            title: 'titulo 4',
            date: moment().format('MMMM Do YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum laborum ducimus corrupti, eos eaque nemo, harum, magnam ipsum assumenda perferendis rerum incidunt nihil iusto recusandae commodi unde ratione? ipsum dolor sit, amet consectetur adipisicing elit. Amet debitis necessitatibus libero quo,'
        },
        {
            title: 'titulo 5',
            date: moment().format('MMMM Do YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore earum laborum ducimus corrupti, eos eaque nemo, harum, magnam ipsum assumenda perferendis rerum incidunt nihil iusto recusandae commodi unde ratione? ipsum dolor sit, amet consectetur adipisicing elit. Amet debitis necessitatibus libero quo,'
        },
    ];

    // recorremos el array de posts que contiene los datos json y creamos una variable element
    posts.forEach((element) => {
        // creamos una plantilla con las comillas invertidas y guardandola en una variable y utilizamos element para mostrar los objetos json
        var post = ` 
        <section id="posts">
        <h2>${element.title}</h2>
        <article class="post">
            <h3>${element.date}</h3>
            <p>${element.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
    </section>`;
        // comprobamos que no haiga un error
        console.log(post);

        // guardar en una variable el div con el id contenido
        var content = $('#contenido');
        // añadimos con append la plantilla guardada en la variable post 
        content.append(post)
    });

    //cambiar color de tema
    // primero creamos una variable llamada tema y seleccionamos el link css con el id theme
    var tema = $('#theme');
    $('.green').click(function () {
        // cambiamos el valor del atributo href para hacer posible el cambio de color del tema
        tema.attr('href', 'assets/css/green.css');
    });

    $('.red').click(function () {
        tema.attr('href', 'assets/css/red.css');
    });

    $('.blue').click(function () {
        tema.attr('href', 'assets/css/blue.css');
    });

    // al apretar el botón te redirigira al principio
    var botonSubir = $('.top');
    // creamos una variable 'e'
    botonSubir.click(function (e) {
        // cancela la acción o respuesta por defecto. Por ejemplo al presionar un enlace, evita que vaya a la ruta especificada en href, o bien evita enviar un formulario al hacer click en el botón submit, etc.
        e.preventDefault();
        // daremos animaciones con el metodo .animate a las etiquetas seleccionadas <html> y <body>
        $('html, body').animate({ //tendra estos datos
            scrollTop: 0 //que hace un efecto scroll automático hacia arriba teniendo un valor de 0px al apretar el botón
        }, 500); //que tenga 500ms (milisegundos) de duración

        // detiene la ejecución del código y sale del bloque de la función.
        return false;
    });

    /**
     * formulario de login falso que nos permita guardar en el localstrorage el nombre del usuario y en el caso de que exista la sesión, entonces mostrarla y también poder cerrar sesión
     */
    // creamos una variable llamada login y tendra almacenado la selección de la etiqueta <form> que esta dentro de un div con el id login
    var login = $('#login form');
    // cuando enviemos el formulario que haga las siguientes instrucciones
    login.submit(function(){
        /* creamos una variable llamada 'inputName' que tendrá almacenado la selección del input con el id name y obtener el valor y lo guardamos en el localstorage el primer valor sería el id que tendrá el dato y el segundo es el valor que guardamos en la variable*/ 
        // recuerda que esta variable solo se ejecutará en este bloque de function por eso nombro otra variable con el mismo nombre fuera del function y no tendra efecto en el anterior ya que no estan en el mismo bloque
        var inputName = $('#name').val();
        localStorage.setItem('nombre', inputName);
    });

    // una vez que se recargue la pantalla creamos una variable y recogemos el valor del localstorage con el id que le hemos dado, en este caso nombre
    var inputName = localStorage.getItem('nombre');

    // Sí el valor de inputName es diferente a null(no tener nada) y a undefined(indefinido), pues que muestre el valor que introduciste en el input con el id name
    if(inputName != null && inputName != 'undefined'){
        // incrustar la información dentro de un parrafo y que esta dentro del div con el id about
        // creamos una variable llamada about y tendrá almacenado la selección del parrafo que esta dentro del id about y usamos el metodo .html() se utiliza para devolver o cambiar el contenido html y de texto de un elemento, puede contener etiquetas.
        var about = $('#about p');
        about.html('<strong>Bienvenido, '+inputName+'</strong>').css('margin-top', '10px').css('text-align', 'center');
        // añadimos con append al parrafo un enlace para cerrar sesion
        about.append('<a href="#" id="logout">cerrar sesión</a>');
        // escondemos el formulario luego de introudicir datos y enviar el formulario
        $('#login').hide();
        
        // evento click con las siguientes instrucciones para el cierre de sesión
        var logout = $('#logout');
        logout.click(function(){
            // con esto eliminamos todos los datos guardados en el localstorage 
            localStorage.clear();
            // recargamos con el metodo .reload() al documento actual location
            // .reload() hace lo mismo que el botón de recargar en su navegador.
            location.reload();
        });
    }

});