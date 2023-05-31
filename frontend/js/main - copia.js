$(".toggle").click(function () {
  $(".formulario").animate(
    {
      height: "toggle",
      "padding-top": "toggle",
      "padding-bottom": "toggle",
      opacity: "toggle",
    },
    "slow"
  );

  var spanvar = $(this).find(".toggle_text");
  $(spanvar).text(
    spanvar.text() == "Iniciar Sesión" ? "Crear Cuenta" : "Iniciar Sesión"
  );
});

//Agregar el método que rellena los array y actualiza los contadores.

// Aunque este proyecto maneje jquery, eso no impide utilizar JS.

var user_object = [];

var contador_registro = 0;
var indices_registro = [];

var contador_menu = 0;
var indices_menu = [];

var contador_carrito = 0;
var indices_carrito = [];

function rellenarIndiceRegistro() {
  for (index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);

    if (key.includes("r")) {
      indices_registro.push(key);
      contador_registro = contador_registro + 1;
    }
  }
}

rellenarIndiceRegistro();

// se limpia el localStorage
//localStorage.clear();

// Función para registar los usuarios

function registrarUsuario() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;

  user_object = {
    name: name,
    password: password,
    email: email,
    phone_number: phone_number,
  };

  if (!validarFormularioRegistro()) {
    pasarAlLocalStorage();
    vaciarInputRegistro();
    alert("El usuario: " + user_object.name + " se ha registrado");
  }
}

function vaciarInputRegistro() {
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone_number").value = "";
}

function pasarAlLocalStorage() {
  let cadena = "";

  cadena =
    user_object.name +
    "," +
    user_object.password +
    "," +
    user_object.email +
    "," +
    user_object.phone_number;

  let index = "r" + String(indices_registro.length);
  localStorage.setItem(index, cadena);
  rellenarIndiceRegistro();
}

function isEmpty(str) {
  return !str.trim().length;
}

function validarFormularioRegistro() {
  let estado = false;
  let validity = !document.getElementById("form_registrarse").checkValidity();

  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;

  if (
    (isEmpty(name) == true) |
    (isEmpty(password) == true) |
    (isEmpty(email) == true) |
    (isEmpty(email) == true) |
    (isEmpty(phone_number) == true)
  ) {
    document.getElementById("form_registrarse").reportValidity();
    alert("Por favor llene cada dato requerido en el formulario");

    estado = true;

    return estado;
  }

  if (validity) {
    document.getElementById("form_registrarse").reportValidity();
    alert(
      "Por favor ingrese el tipo correcto de dato requerido en cada casilla"
    );

    estado = true;

    return estado;
  }

  return estado;
}

function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  if (!validarFormularioIniciarSesion(usuario, contraseña)) {
    let contador_local = 0;
    while (contador_local < contador_registro) {
      index = indices_registro[contador_local];
      let string = localStorage[index];
      let splitted_info = string.split(",");

      let s_user = splitted_info[0];
      let s_pass = splitted_info[1];

      if ((usuario == s_user) & (contraseña == s_pass)) {
        let user_logged = splitted_info[0] + "," + splitted_info[2];
        localStorage.setItem("loggedin", user_logged);
        alert("El usuario inició sesión");
        vaciarInputIniciarSesion();
        window.location.replace("/RestauranteIC-main/store.html");
        return;
      }
      contador_local = contador_local + 1;
    }

    alert("Usuario no registrado o usuario y/o contraseña errado(s)");
    vaciarInputIniciarSesion();
  }
}

function validarFormularioIniciarSesion(usuario, contraseña) {
  let estado = false;
  let validity = !document
    .getElementById("form_iniciar_sesion")
    .checkValidity();

  if ((isEmpty(usuario) == true) | (isEmpty(contraseña) == true)) {
    document.getElementById("form_iniciar_sesion").reportValidity();
    alert("Por favor llene cada dato requerido en el formulario");

    estado = true;

    return estado;
  }

  if (validity) {
    document.getElementById("form_iniciar_sesion").reportValidity();
    alert(
      "Por favor ingrese el tipo correcto de dato requerido en cada casilla"
    );

    estado = true;

    return estado;
  }

  return estado;
}

function vaciarInputIniciarSesion() {
  document.getElementById("usuario").value = "";
  document.getElementById("contraseña").value = "";
}
