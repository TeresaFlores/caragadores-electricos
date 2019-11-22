import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alarma from './views/Alarma';
import ServicioVoz from './views/Servicio-voz';
import Mapa from './views/Mapa';
import Navigation from './components/Navigation';
import Historial from './views/Historial';
import Historial1 from './views/Historial1';
import Historial2 from './views/Historial2';
import Historial3 from './views/Historial3';
import TypePlugs from './views/TypePlugs';



function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-1">
        {/* <Route path="/" exact component={Login}/> */}

        <Route path="/Alarma" component={Alarma}/>
        <Route path="/Servicio-voz" component={ServicioVoz}/>
        <Route path="/Historial" component={Historial}/>
        <Route path="/Historial1" component={Historial1}/>
        <Route path="/Historial2" component={Historial2}/>
        <Route path="/Historial3" component={Historial3}/>
        <Route path="/mapa" component={Mapa} />
        <Route path="/cargadores" component={TypePlugs} />

      </div>
    </Router>
  )
}

export default App;
