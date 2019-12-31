import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component{
  state = {
    citas:[]
  }

  crearNuevaCita = datos =>{
    //Copiar state actual
    const citas = [...this.state.citas, datos];

    // Agregar nuevo stare
    this.setState({
      citas
    })
  }

  render(){
    return (
      <div class="container">
        <Header
          titulo = 'Administrador Citas Pacientes'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
      </div>  
    );
  }

}

export default App;
