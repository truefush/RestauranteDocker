var products = [
  {
    id: "producto1",
    nombre: "Ceviche Costero",
    precio: 23000,
    img: '<img style="width:70px;height:60px" src="img/2_ceviche_costero.jpg" alt="">',
    stock: 12,
    carrito: 0,
  },
  {
    id: "producto2",
    nombre: "Ceviche Pescado",
    precio: 21000,
    img: '<img style="width:70px;height:60px" src="img/3_ceviche_pescado.jpg" alt="">',
    stock: 23,
    carrito: 0,
  },
  {
    id: "producto3",
    nombre: "Empanadas Paye",
    precio: 18000,
    img: '<img style="width:70px;height:60px" src="img/4_empeandas_paye.jpg" alt="">',
    stock: 35,
    carrito: 0,
  },
  {
    id: "producto4",
    nombre: "Fritura De Bahía",
    precio: 19000,
    img: '<img style="width:70px;height:60px" src="img/5_fritura_bahia.jpg" alt="">',
    stock: 28,
    carrito: 0,
  },
  {
    id: "producto5",
    nombre: "Alitas De Pollo",
    precio: 19000,
    img: '<img style="width:70px;height:60px" src="img/6_alitas_pollo.jpg" alt="">',
    stock: 60,
    carrito: 0,
  },
  {
    id: "producto6",
    nombre: "Bocaditos De Pollo Picante",
    precio: 19000,
    img: '<img style="width:70px;height:60px" src="img/7_bocaditos_pollo_picante.jpg" alt="">',
    stock: 56,
    carrito: 0,
  },
  {
    id: "producto7",
    nombre: "Palitos De Queso Crujientes",
    precio: 14000,
    img: '<img style="width:70px;height:60px" src="img/8_palitos_queso.jpg" alt="">',
    stock: 83,
    carrito: 0,
  },
  {
    id: "producto8",
    nombre: "Empanadas Satafereñas",
    precio: 14000,
    img: '<img style="width:70px;height:60px" src="img/9_empanadas_santaferenas.jpg" alt="">',
    stock: 45,
    carrito: 0,
  },
  {
    id: "producto9",
    nombre: "Sopa Del Día",
    precio: 14000,
    img: '<img style="width:70px;height:60px" src="img/10_sopa_dia.jpg" alt="">',
    stock: 50,
    carrito: 0,
  },
  {
    id: "producto10",
    nombre: "Pechuga De Pollo Mediterránea",
    precio: 28000,
    img: '<img style="width:70px;height:60px" src="img/12_pechuga_pollo_mediterranea.jpg" alt="">',
    stock: 20,
    carrito: 0,
  },
  {
    id: "producto11",
    nombre: "Lomito De Res",
    precio: 37000,
    img: '<img style="width:70px;height:60px" src="img/13_lomito_res.jpg" alt="">',
    stock: 15,
    carrito: 0,
  },
  {
    id: "producto12",
    nombre: "Steak De Lomo Ancho",
    precio: 34000,
    img: '<img style="width:70px;height:60px" src="img/14_steak_lomo.jpg" alt="">',
    stock: 19,
    carrito: 0,
  },
  {
    id: "producto13",
    nombre: "Costillas De Cerdo Al Estilo Nomad",
    precio: 40000,
    img: '<img style="width:70px;height:60px" src="img/15_costillas_cerdo.jpg" alt="">',
    stock: 10,
    carrito: 0,
  },
  {
    id: "producto14",
    nombre: "Filete De Pescado Caribe",
    precio: 35000,
    img: '<img style="width:70px;height:60px" src="img/16_filete_pescado_caribe.jpg" alt="">',
    stock: 12,
    carrito: 0,
  },
  {
    id: "producto15",
    nombre: "Pollo Rostizado En Grill",
    precio: 28000,
    img: '<img style="width:70px;height:60px" src="img/17_pollo_rostizado.jpg" alt="">',
    stock: 12,
    carrito: 0,
  },
  {
    id: "producto16",
    nombre: "Salmon San Andrés",
    precio: 40000,
    img: '<img style="width:70px;height:60px" src="img/18_salmon.jpg" alt="">',
    stock: 12,
    carrito: 0,
  },
  {
    id: "producto17",
    nombre: "Fetuccini Ámbar",
    precio: 32000,
    img: '<img style="width:70px;height:60px" src="img/19_fetuccini.jpg" alt="">',
    stock: 25,
    carrito: 0,
  },
  {
    id: "producto18",
    nombre: "Arroz Del Fonce",
    precio: 32000,
    img: '<img style="width:70px;height:60px" src="img/20_arroz_fonce.jpg" alt="">',
    stock: 40,
    carrito: 0,
  },
  {
    id: "producto19",
    nombre: "Pasta Corta Al Estilo Del Chef",
    precio: 28000,
    img: '<img style="width:70px;height:60px" src="img/21_pasta.jpg" alt="">',
    stock: 15,
    carrito: 0,
  },
  {
    id: "producto20",
    nombre: "Arroz Colina",
    precio: 28000,
    img: '<img style="width:70px;height:60px" src="img/22_arroz_colina.jpg" alt="">',
    stock: 20,
    carrito: 0,
  },
  {
    id: "producto21",
    nombre: "Hamburguesa Bluedoors",
    precio: 28000,
    img: '<img style="width:70px;height:60px" src="img/23_hamburgesa.jpg" alt="">',
    stock: 30,
    carrito: 0,
  },
];

function cargarLogin() {
  let info = localStorage.getItem("loggedin");

  let splitted_info = info.split(",");
  let nombre = splitted_info[0];
  let correo = splitted_info[1];

  const element = document.getElementById("prof_div_1");
  const element2 = element.querySelector("#prof_div_1_div_info");
  const element3 = element2.querySelectorAll(":scope > span");

  element3[0].textContent = nombre;
  element3[1].textContent = correo;
}

cargarLogin();

function logOut() {
  localStorage.removeItem("loggedin");
  // window.location.replace("inserta ruta válida en windows para el archivo index.html");
  location.href = "/";
}

function cargarStock() {
  for (let index = 0; index < products.length; index++) {
    let id = products[index].id;

    const element = document.getElementById(id);
    const element2 = element.querySelector(":scope > span");
    const element3 = element2.querySelector("#stock_unit");

    element3.textContent = " " + products[index].stock;
  }
}

cargarStock();

function actualizarStockHTMLIndividual(indice) {
  let id = products[indice].id;

  const element = document.getElementById(id);
  const element2 = element.querySelector(":scope > span");
  const element3 = element2.querySelector("#stock_unit");

  element3.textContent = " " + products[indice].stock;
}

function asignarAgotamiento(indice) {
  let id = products[indice].id;

  const element = document.getElementById(id);

  if (element.className != "box_out") {
    element.className = "box_out";
    element.insertAdjacentHTML(
      "beforeend",
      '<input type="button" class="btn_out" value="Agotado">'
    );
  }
}

function retirarAgotamiento(index) {
  let id = products[index].id;

  const element = document.getElementById(id);

  if (element.className != "box") {
    element.className = "box";
    let element2 = element.querySelectorAll(":scope > input");
    if ((element2 != null) & (element2 != undefined)) {
      element.removeChild(element2[2]);
    }
  }
}

function actualizarCarrito(index) {
  //Con indice hago referencia a un index tipo numérico
  // Y con indice me refiero a uno tipo string

  let id = products[index].id;
  let nombre = products[index].nombre;
  let imagen = products[index].img;
  let precio = products[index].precio;
  let carrito = products[index].carrito;

  // Esta variable se utiliza para generar nuevos div en el carrito
  // Pero también para identificar desde qué producto se clickea
  let element_id = "car" + id;

  let parentElement = document.getElementById("contenedor_carrito");
  let childrenList = parentElement.children;

  let for_boolean = false;
  for (let index = 0; index < childrenList.length; index++) {
    if (childrenList[index].id == element_id) {
      for_boolean = true;
      break;
    }
  }

  if (for_boolean == true) {
    const element = parentElement.querySelector("#" + element_id);
    const element2 = element.querySelector(":scope > div");
    const element3 = element2.querySelector(":scope > h3");
    const element4 = element3.querySelector("#item_cantidad");

    element4.textContent = products[index].carrito;
  } else {
    parentElement.insertAdjacentHTML(
      "afterbegin",
      '<div id="' +
        element_id +
        '" class="cart-item">' +
        '<span class="fas fa-times" onclick="retornarDeCarritoAStock(' +
        index +
        ')"></span>' +
        imagen +
        '<div class="content">' +
        "<h3>" +
        nombre +
        'X<span id="item_cantidad">' +
        carrito +
        "</span></h3>" +
        '<div class="price">' +
        precio +
        "</div>" +
        "</div>" +
        "</div>"
    );
  }
}

function añadirAlCarrito(indice) {
  let index = +indice;
  if (products[index].stock >= 1) {
    products[index].stock -= 1;
    actualizarStockHTMLIndividual(index);

    //Parte del carrito
    products[index].carrito += 1;
    actualizarCarrito(index);
  }

  if (products[index].stock == 0) {
    alert("Producto agotado");
    asignarAgotamiento(index);
  }

  //cartItem.classList.toggle('active');
}

function retornarDeCarritoAStock(index) {
  products[index].stock += products[index].carrito;
  products[index].carrito = 0;

  let parentElement = document.getElementById("contenedor_carrito");
  let element = parentElement.querySelector("#car" + products[index].id);
  parentElement.removeChild(element);

  actualizarStockHTMLIndividual(index);
  retirarAgotamiento(index);
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  /* navbar.classList.remove('active'); */
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  /* navbar.classList.remove('active'); */
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  // navbar.classList.remove('active');
  // searchForm.classList.remove('active');
  // cartItem.classList.remove('active');
};
