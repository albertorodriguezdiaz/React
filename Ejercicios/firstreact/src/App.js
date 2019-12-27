import React, {Fragment} from 'react';

function App() {

  const empleado ={
    nombre: 'Alberto Rodriguez',
    trabajo: 'Desarrollador Web'
  }
  return (
    // React.createElement(
    //   'h1',
    //   {id: 'heading', className: 'heading'},
    //   'Bievenidos'
    // )

    <Fragment>
    <h1>{empleado.nombre}</h1>
    <p>{empleado.trabajo}</p>
    </Fragment>
  );
}

export default App;
