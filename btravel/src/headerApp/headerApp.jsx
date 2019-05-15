import React, {Component} from 'react'


class headerApp extends Component {
    render()
    {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="./index.html">
                <img class="img-logo" src="assets/images/pi-globe-3.svg"/>
            </a>
            <p><h1>BEDU TRAVEL</h1></p>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto">
            
                <li class="nav-item">
                    <a class="nav-link" href="#">Registrate</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Quiero Viajar
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Buscar viajes</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Recomendaciones</a>
                    </div>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
        
            </div>
            </nav>
            </div>
        
    
         );
  }
}
export default headerApp;