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

/* login */
function login() {
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasenaLogin").value;

  var usuario = {
    correo: correo,
    contrasena: contrasena,
  };

  //console.log("Usuario", usuario);

  fetch("http://localhost:8090/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => response)
    .then((data) => {
      //alert(data.text());
      if (data.status == 200) {
        location.href = "/store.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/*Registro*/

function registro() {
  // console.log("Mensaje de ejecicion registro");
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correoRegistro").value;
  var contrasena = document.getElementById("contrasena").value;
  var telefono = document.getElementById("telefono").value;

  //console.log("Correo", correo);

  var usuario = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena,
    telefono: telefono,
  };

  fetch("http://localhost:8090/user/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
