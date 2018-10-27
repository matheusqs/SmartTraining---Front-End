import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Login} from './Telas/Login';
import {ManterUsuario} from './Telas/ManterUsuario';
import {AlunoIndex} from './Telas/AlunoIndex';
import {ListaExercicios} from './Telas/ListaExercicios';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Login}/>
      <Route path='/manterusuario' component={ManterUsuario}/>
      <Route path='/alunoindex' component={AlunoIndex}/>
      <Route path='/exercicios' component={ListaExercicios}/>
    </Switch>
  </BrowserRouter>,
  document.querySelector('.root')
);

registerServiceWorker();
