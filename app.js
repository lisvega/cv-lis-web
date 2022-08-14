/* ------------------ 1) DECIMOS QUE INFORMACION QUEREMOS TENER ----------*/

const personalInfo = {
    name: "Lissy Rivera",
    location: "Madrid",
    img: 'https://scontent-bcn1-1.xx.fbcdn.net/v/t1.6435-9/69866901_2527956760606196_1403245667635167232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=UsPlFkTt7x0AX_aC07G&_nc_ht=scontent-bcn1-1.xx&oh=00_AT9J7fMRPx5WJ-Kg4YmKXmTVF-sh60M1RQbEDwlw-qwj2g&oe=62FB6479',
    about: 'Fullstack Developer 💻 Always enjoying new experiences. I love photography, fan of Real Madrid 🚀 ',
    email: 'lissyrivera456@gmail.com',
    mobile: '603131711'
}


const tecnologies = {
    html: {
        name: 'HTML5',
        experience: 'Alto',
        img: 'https://cdn-icons-png.flaticon.com/512/888/888859.png'
    },
    css: {
        name: 'CSS3',
        experience: 'Medio',
        img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png'
    },
    js: {
        name: 'Javascript',
        experience: 'Alto',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    node: {
        name: 'NodeJS',
        experience: 'Alto',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png'
    },
    mongo: {
        name: 'MongoDB',
        experience: 'Alto',
        img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/folder_type_mongodb_icon_129879.png'
    },
    react: {
        name: 'ReactJS',
        experience: 'Alto',
        img: 'https://cdn.icon-icons.com/icons2/3261/PNG/512/reactjs_logo_icon_206692.png'
    }
}

const gallery = {
    landing1: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://tecnologiaparatuempresa.ituser.es/files/201603/startup.jpg'
    },
    landing2: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://www.rananegra.es/uploads/images/web-reactiva.jpg'
    },
    landing3: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://esportsbureau.com/wp-content/uploads/2022/06/Tecnologi%CC%81a-Esports.jpg'
    },
    landing4: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    landing5: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://revistabatxillerat.files.wordpress.com/2018/01/tecnologia-2.jpg?w=900'

    },
    landing6: {
        name: 'Proyecto web HTML & CSS',
        cover: 'https://redimensiona.mx/images/servicios/tecnologia/proyectos-tecnologicos-0.png'
    }
}

const rrss = {
    linkedin: {
        name: 'LinlkedIn',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    github: {
        name: 'Github',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    }
}

/* -------------------------- 2) CONTENEDOR ----------------------------*/

//Creamos contenedor donde contendra cada  infomacion de cada div en nuestro html
let personalInfoHtml = document.querySelector('#personalInfo');
let tecnologiesHtml = document.querySelector('#tecnologies');
let galleryHtml = document.querySelector('#gallery');
let rrssHtml = document.querySelector('#rrss');

/* --------------------- 3) FUNCIONES QUE CONVIERTEN A HTML -------------*/


/*Creamos la funcion por cada div de información y le pasamos parametro el array
del cual sacaremos la informacion a procesar
Deremos la estructura que contendra estos div de informacion*/

const personalInfoConversionHtml = (personalInfo) => {
    return `
        <div class="divPersonal1">
            <img  class="personal-img" src="${personalInfo.img}" alt="${personalInfo.name}"></img>

        </div>
        <div class="divPersonal2">
            <h1>${personalInfo.name}</h1>
            <h2>${personalInfo.location}</h2>
            <p>${personalInfo.about}</p>
            <p>${personalInfo.email}</p>
            <p>${personalInfo.mobile}</p>


        </div>`

}

const tecnologiesConversionHtml = (tecnologies) => {
    return `
      <div class="tecnologie-info">

        <h1>${tecnologies.html.name}</h1>
        <h2>${tecnologies.html.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.html.img}" alt="${tecnologies.html.name}">
      </div>

      </div>

      <div class="tecnologie-info">
        <h1>${tecnologies.css.name}</h1>
        <h2>${tecnologies.css.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.css.img}" alt="${tecnologies.css.name}">
      </div>

      <div class="tecnologie-info">
        <h1>${tecnologies.js.name}</h1>
        <h2>${tecnologies.js.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.js.img}" alt="${tecnologies.js.name}">
      </div>


      <div class="tecnologie-info">
        <h1>${tecnologies.node.name}</h1>
        <h2>${tecnologies.node.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.node.img}" alt="${tecnologies.node.name}">
      </div>



      <div class="tecnologie-info">
        <h1>${tecnologies.mongo.name}</h1>
        <h2>${tecnologies.mongo.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.mongo.img}" alt="${tecnologies.mongo.name}">
      </div>

      <div class="tecnologie-info">
        <h1>${tecnologies.react.name}</h1>
        <h2>${tecnologies.react.experience}</h2>
        <img class="tecnologie-img" src="${tecnologies.react.img}" alt="${tecnologies.react.name}">
      </div>


    `
}

const galleryConversionHtml = (gallery) => {
    return `
    <div class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/1.png" alt=""></img>
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>
    </div>
    <div class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/2.jpeg" alt=""></img>
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>
    </div>
    <div class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/3.png" alt=""></img>
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>
    </div>
    <div class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/4.jpeg" alt=""></img>
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>
    </div>
    <div  class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/5.jpeg" alt=""></img>
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>
    </div>
    <div class="gallery-container-son">
        <img src="/Users/pedroleridanieto/Desktop/Proyectos/java scrip /CV/asset/6.jpeg" alt="">
        <p>Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.
            Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo...
            Jarl!!
        </p>

    </div>`

}

const rrssConversionHtml = (rrss) => {
    return `
    <div>
        <div><h1>${rrss.linkedin.name}</h1></div>
        <div><img src="${rrss.linkedin.logo}" alt="${rrss.linkedin.name}"></img></div>
        <div><a href="">touch me</a></div>
    </div>
    <div>
        <div><h1>${rrss.linkedin.name}</h1></div>
        <div><img src="${rrss.github.logo}" alt="${rrss.github.name}"></img></div>
        <div><a href="">touch me</a></div>
    </div> `

}

/* --------------------- 4) CON LOS ELEMENTOS CREAMOS EL HTML -------------*/

// Container será cada uno de los querys - element cada uno de los bloques de html
// Container será cada uno de los querys - element cada uno de los bloques de html

const passToDocumentHtml = (container, functionCreateHTML, element) => {
    container.innerHTML += functionCreateHTML(element);
}



passToDocumentHtml(personalInfoHtml, personalInfoConversionHtml, personalInfo);
passToDocumentHtml(tecnologiesHtml, tecnologiesConversionHtml, tecnologies);
passToDocumentHtml(galleryHtml, galleryConversionHtml, gallery);
passToDocumentHtml(rrssHtml, rrssConversionHtml, tecnologies);
