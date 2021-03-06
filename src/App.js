import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoMonarca from './assets/img/logoMonarca.png';
import CarolBecerra from './assets/img/CarolBecerra.png';
import jefferson from './assets/img/jefferson.jpg';
import Leydi from './assets/img/Leydi.jpeg';
import cristian from './assets/img/cristian.jpeg';
import truyo from './assets/img/truyo.jpg';
import pd1 from './assets/img/CatBen1-1.jpg'
import pd2 from './assets/img/CatBen1-2.jpg'
import pd3 from './assets/img/CatBen1-3.jpg'
import pd4 from './assets/img/CatBen1-4.jpg'
import t1 from './assets/img/CatBen2-1.jpg'
import t2 from './assets/img/CatBen2-2.jpg'
import t3 from './assets/img/CatBen2-3.jpg'
import t4 from './assets/img/CatBen2-4.jpg'
import ds2 from './assets/img/CatBen3-2.jpg'
import ds3 from './assets/img/CatBen3-3.jpg'
import ds4 from './assets/img/CatBen3-4.jpg'
import Facebook from './assets/img/facebook.png'
import Twitter from './assets/img/twitter.PNG'
import Instagram from './assets/img/instagram.PNG'
import lm from './assets/img/logo_misiontic.png'
import lu from './assets/img/marca_UTP.png'
import sli1 from './assets/img/Slide1.jpg'
import sli2 from './assets/img/slider2.jpg'
import sli3 from './assets/img/slider3.jpg'


/**componentess */
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <header>
    
    
    <div class="header-section" id="inicio">
        <div class="header-container fixed-top" style={{background: `rgb(40, 40, 93)`}}>
            <div class="site-title">
                <Titulo></Titulo>
            </div>

            <ul class="site-nav">
                <a href="#inicio" class="nav-item-link">Inicio</a>
                <a href="#services">Categorias Beneficios</a>
                <a href="#Beneficios">Beneficios</a>
                <a href="#team">Nuestro equipo</a>
                <a href="#modalLogin" data-bs-toggle="modal">Login</a>
                <a href="#modalRegistro" data-bs-toggle="modal">Registrarme</a>
            </ul>
          
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>


            <div class="logo-container">
                <img class="logo-container__site-logo" src={logoMonarca} alt="Logo MisionTic 2022"/>
            </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={sli1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <img src={sli2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <img src={sli3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon"aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
  </header>
   
    <div>
        <h1 class="CatBen" id="services">Categorias Beneficios </h1>
     
        <div class="services-section">
            <article class="services-info">
                <img class="services-info__imagen" src={pd1} alt=""/>
                <img class="services-info__imagen" src={pd2} alt=""/>
                <img class="services-info__imagen" src={pd3} alt=""/>
                <img class="services-info__imagen" src={pd4} alt=""/>
                <h2 class="services-info__title">Peque??os detalles y antojos</h2>
                <p class="services-info__text">
                    La categoria de beneficios Peque??os detalles y antojos es en su mayoria para los empleados que cuentan con menos de un a??o en la empresa Monarca Servicios, o para cualquier empleado que desee usar su beneficio para darse un gusto, encontrar??s desde un
                    helado hasta cenas en excelentes restaurantes.
                </p>
            </article>
            <article class="services-info">
                <img class="services-info__imagen" src={t1} alt=""/>
                <img class="services-info__imagen" src={t2} alt=""/>
                <img class="services-info__imagen" src={t3} alt=""/>
                <img class="services-info__imagen" src={t4} alt=""/>
                <h2 class="services-info__title">Viajes y mucho sol</h2>
                <p class="services-info__text">
                    La categoria de beneficios Viajes y mucho sol busca incentivar a nuestros empleados que tienen una trayectoria m??s grande en la empresa, puedes encontrar escapadas de un fin de semana, hasta descuentos en ticketes internacinales.
                </p>
            </article>
            <article class="services-info">
                
                <img class="services-info__imagen" src={ds2} alt=""/>
                <img class="services-info__imagen" src={ds3} alt=""/>
                <img class="services-info__imagen" src={ds4} alt=""/>
                <h2 class="services-info__title">Deportes y Salud</h2>
                <p class="services-info__text">
                    La categoria de beneficios Deportes y Salud es un escape a nuestra rutina aportando actividades que nos brindan salud, puedes encontrar tiempo de entrenamiento de tus deportes favoritos, suscripciones al gimnasio e incluso actividades en bicicleta.
                </p>
            </article>
        </div>
    
        
        <div>
            <div id="crear-beneficio">
                {/* <a class="bcrear-ben" href="#modalCrearBeneficio" data-bs-toggle="modal" title="Crear Beneficio" role="link">Crear Beneficio</a> */}
            </div>

            <h1 id="Beneficios" class="CatBen">Beneficios</h1>

        </div>
      
        <div class="seccion-beneficios">
            <article class="news-info">
                <div class="news-header">
                    <img class="news-info__imagen" src="https://tunegociobonito.com/wp-content/uploads/2020/04/categoria-decoracion-tienda-ropa-1024x478.jpg" width="300" height="200" alt=""/>
                    <br/>

                    <h2 class="news-info__title">Descuentos en tiendas de ropa</h2>
                </div>
                <p class="news-info__text">
                    Obtenga descuentos en las mejores tiendas de ropa de tus marcas favoritas
                </p>
                <div>
                    <a href="#modalBeneficio" data-bs-toggle="modal" class="buttonVerBeneficio">Ver beneficio</a>

                </div>
            </article>

            <article class="news-info">
                <div class="news-header">
                    <img class="news-info__imagen" src="data:image/jpeg;base64,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"
                        alt=""/>
                    <h2 class="news-info__title">Descuentos en viajes y hospedajes</h2>
                </div>
                <p class="news-info__text">
                    Obtenga descuentos a los mejores destinos y hoteles de cinco estrellas
                </p>
                <form>
                    <a href="#modalBeneficio" data-bs-toggle="modal" class="buttonVerBeneficio">Ver beneficio</a>
                </form>
            </article>

            <article class="news-info">
                <div class="news-header">
                    <img class="news-info__imagen" src="https://www.elpais.com.co/files/article_main/uploads/2019/02/15/5c673e7fe1fe0.jpeg" width="290" height="200" alt=""/>
                    <h2 class="news-info__title">Descuentos en gimnasios</h2>
                </div>
                <p class="news-info__text">
                    Obtenga descuentos en los mejores gimnasios
                </p>
                <div>
                    <a href="#modalBeneficio" data-bs-toggle="modal" class="buttonVerBeneficio">Ver beneficio</a>
                </div>
            </article>

            <article class="news-info">
                <div class="news-header">
                    <img class="news-info__imagen" src="https://i.blogs.es/0baa91/39f95492-38ee-4f16-92e1-ba5161f4a958/1366_2000.jpeg" width="270" height="200" alt=""/>
                    <h2 class="news-info__title">Descuento en supermercados</h2>
                </div>
                <p class="news-info__text">
                    Obtenga descuentos en los mejores supermercados de cadena
                </p>
                <form>
                    <a href="#modalBeneficio" data-bs-toggle="modal" class="buttonVerBeneficio">Ver beneficio</a>
                </form>
            </article>


        </div>



        <h1 id="team" class="CatBen">Equipo</h1>
      
        <section class="seccion-equipo">

            <article class="team-info">
                <img class="team-info__imagen" src={Leydi} alt=""/>
                <h2 class="team-info__title">Leydi Joanna Molano Ramires</h2>
                <p class="team-info__text">
                    Desarrolladora junior, psicologa, enfocada en investigaci??n de enfoque cuantitativo y escritura cient??fica.
                </p>
            </article>

            <article class="team-info">
                <img class="team-info__imagen" src={cristian} alt=""/>
                <h2 class="team-info__title">Cristian Adolfo Aviles Hernandez</h2>
                <p class="team-info__text">
                    Psicologo profesional con enfasis en el area organizacional y desarrollador junior, analisis de informacion, interpretacion, recopilacion de datos e investigacion.
                </p>
            </article>

            <article class="team-info">
                <img class="team-info__imagen" src={CarolBecerra} alt=""/>
                <h2 class="team-info__title">Carol Nataly Becerra Rodriguez</h2>
                <p class="team-info__text">
                    Ingeniera de software con conocimiento en gesti??n de requerimientos y desarrollo.
                </p>
            </article>

            <article class="team-info">
                <img class="team-info__imagen" src={jefferson} alt=""/>
                <h2 class="team-info__title">Jeffersson Henao Urbano</h2>
                <p class="team-info__text">
                    Ingeniero electronico con conocimiento en gesti??n de base de datos y desarrollo web.
                </p>
            </article>

            <article class="team-info">
                <img class="team-info__imagen" src={truyo} alt=""/>
                <h2 class="team-info__title">Leidy Truyo</h2>
                <p class="team-info__text">
                   Estudiante de economia, desarrolladora junior con enfasis en desarrollo web.
                </p>
            </article>

        </section>
      

    </div>
   

    <div class="seccion-pie">
        <article>
            <h2>Contacto</h2>
            <div>
                <link to="https://www.facebook.com/groups/Grupo.oficial.MisionTIC2022/?ref=share" target="_blank"><img class="footer-info__imagen" src={Facebook} alt=""/></link>
                <link to="https://twitter.com/Ministerio_TIC?s=09" target="_blank"><img class="footer-info__imagen" src={Twitter} alt=""/></link>
                <link to="https://instagram.com/ministerio_tic?utm_medium=copy_link" target="_blank"><img class="footer-info__imagen" src={Instagram} alt=""/></link>
            </div>
            <p>Monarca Soluciones S.A.S</p>
            <p>Calle 24 # 19 - 37 Bogot??, Colombia</p>
            <p>Calle 7 # 6 - 27 Neiva, Huila</p>
        </article>
        <article>
            <h2>Software desarrollado por el equipo 4 - Ciclo 4</h2>
            <p>Misi??nTic 2022 - Con el apoyo de la Universidad Tecnologica de Pereira UTP</p>
            <a href="https://www.misiontic2022.gov.co/portal/"><img src={lm} alt="" target="_blank"/></a>
            <a href="https://www.utp.edu.co/"><img class="logo-fotter-logo" src={lu} alt="" target="_blank"/></a>


        </article>
    </div>
    
    <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="inputForm" action="" class="form-inline mb-3">
                        <h2 class="title">Ingresa tu usuario:</h2>
                        <input id="usuario" type="text" class="form-control mb-2"/>
                        <h2 class="title">Ingresa tu contrase??a:</h2>
                        <input id="contrase??a" type="password" class="form-control mb-2"/>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Ingresar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="modalRegistro" tabindex="-1" aria-labelledby="modalRegistro" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registra aqui tus datos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="inputForm" action="" class="form-inline mb-3">
                        <section class="form-register">
                            <h4>Formulario Registro</h4>
                            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
                            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"/>
                            <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
                            <input class="controls" type="text" name="cargo" id="cargo" placeholder="Ingrese su Cargo"/>
                            <input class="controls" type="date" name="fechaIngreso" id="fechaIngreso" placeholder="Fecha de ingreso"/>
                            <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contrase??a"/>
                            <p>Estoy de acuerdo con <link to="#">Terminos y Condiciones</link></p>
                            <p><link to="#" data-bs-dismiss="modal">??Ya tengo Cuenta?</link></p>
                        </section>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Confirmar Registro</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="modalBeneficio" tabindex="-1" aria-labelledby="modalBeneficio" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalle del beneficio</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button onclick="alert( 'Monarca Soluciones esta muy agradecido por tus servicios, nos encanta que hayas seleccionado este nuevo beneficio! disfrutalo...')" type="button" class="btn btn-primary">Seleccionar beneficio</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver atras</button>
                </div>

            </div>
        </div>
    </div>


    <div id="modalCrearBeneficio" class="modal fade" tabindex="-1" aria-labelledby="modalCrearBeneficio" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Crear un beneficio</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Nota: Esta opci??n solo esta disponible para el usuario Admin</h6>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="nombreBeneficio" placeholder="Nombre del beneficio" value=""/>
                            <label for="floatingInputGrid">Nombre beneficio</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="descripcionBeneficio" placeholder="Nombre del beneficio" value=""/>
                            <label for="floatingInputGrid">Descripci??n beneficio</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control" id="cantidadBeneficio" placeholder="Cantidad del beneficio" value=""/>
                            <label for="floatingInputGrid">Cantidad beneficio</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option selected>Selecciona la categoria del beneficio</option>
                                    <option value="1">Peque??os detalles y antojos</option>
                                    <option value="2">Viajes y mucho sol</option>
                                    <option value="3">Deportes y Salud</option>
                            </select>
                            <label for="floatingSelectGrid">Categorias Beneficios</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="alert( 'Beneficio Agregado')" type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar Beneficio</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>

        </div>
    </div>
  


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
    <script>
        
    </script>
</div>

  
  );
}

export default App;
