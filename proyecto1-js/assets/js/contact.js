$(document).ready(function () {
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
    login.submit(function () {
        /* creamos una variable llamada 'inputName' que tendrá almacenado la selección del input con el id name y obtener el valor y lo guardamos en el localstorage el primer valor sería el id que tendrá el dato y el segundo es el valor que guardamos en la variable*/
        // recuerda que esta variable solo se ejecutará en este bloque de function por eso nombro otra variable con el mismo nombre fuera del function y no tendra efecto en el anterior ya que no estan en el mismo bloque
        var inputName = $('#name').val();
        localStorage.setItem('nombre', inputName);
    });

    // una vez que se recargue la pantalla creamos una variable y recogemos el valor del localstorage con el id que le hemos dado, en este caso nombre
    var inputName = localStorage.getItem('nombre');

    // Sí el valor de inputName es diferente a null(no tener nada) y a undefined(indefinido), pues que muestre el valor que introduciste en el input con el id name
    if (inputName != null && inputName != 'undefined') {
        // incrustar la información dentro de un parrafo y que esta dentro del div con el id about
        // creamos una variable llamada about y tendrá almacenado la selección del parrafo que esta dentro del id about y usamos el metodo .html() se utiliza para devolver o cambiar el contenido html y de texto de un elemento, puede contener etiquetas.
        var about = $('#about p');
        about.html('<strong>Bienvenido, ' + inputName + '</strong>').css('margin-top', '10px').css('text-align', 'center');
        // añadimos con append al parrafo un enlace para cerrar sesion
        about.append('<a href="#" id="logout">cerrar sesión</a>');
        // escondemos el formulario luego de introudicir datos y enviar el formulario
        $('#login').hide();

        // evento click con las siguientes instrucciones para el cierre de sesión
        var logout = $('#logout');
        logout.click(function () {
            // con esto eliminamos todos los datos guardados en el localstorage 
            localStorage.clear();
            // recargamos con el metodo .reload() al documento actual location
            // .reload() hace lo mismo que el botón de recargar en su navegador.
            location.reload();
        });
    }

    // validar formulario con plugin jquery validate
    // creamos una variable donde guardaremos la seleccion del form con el id form_contact
    var formContact = $('#form_contact');
    // a esta variable que contiene esa selección le pasaremos el metodo del plugin .validate() para activar el plugin y dentro de los parentesis tendremos objetos json
    formContact.validate({
        // creación de reglas -> rules donde especificamos los datos
        rules: {
            //  inputs que queremos validar usando el valor del atributo -> name="" o eso dice el del video XD
            name: {
                // que sea requerido
                required: true,
                // que tenga una longitud minima de 4 caracteres
                minlength: 4
            },
            surname: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                // verificar si el correo esta bien escrito que no le falte el @
                email: true
            },
            genre: {
                required: true
            },
            date: {
                required: true,
            },
            age: {
                required: true,
                number: true,
                minlength: 2
            }


        },

        // agregar tus propios mensajes de error
        messages: {
            name: {
                required: 'El nombre de usuario es requerido. Introduzca un nombre',
                minlength: 'Es necesario que mínimo sean 4 caracteres'
            },
            surname: {
                required: 'El apellido es requerido. Introduzca un apellido',
                minlength: 'Es necesario que mínimo sean 4 caracteres'
            },
            email: {
                required: 'El correo es requerido. Introduzca un correo',
                email: 'El correo no es válido. Asegúrese de que este bien escrito'
            },
            genre:{
                required: 'El genero es requerido. Introduzca su genero'
            },
            date: {
                required: 'La fecha de nacimiento es requerida. Introduzca una fecha'
            },
            age: {
                required: 'La edad es requerida. Introduzca du edad',
                number: 'El dato no es un número. Introduzca su edad',
                minlength: 'Es necesario que mínimo sean 2 caracteres'
            }
        }
    });

});