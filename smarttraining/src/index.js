import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Login} from './Telas/Login';
import {ManterUsuario} from './Telas/ManterUsuario';
import {AlunoIndex} from './Telas/AlunoIndex';
import {ListaExercicios} from './Telas/ListaExercicios';
import {ManterAvaliacao} from './Telas/ManterAvaliacao';
import {ListarAvaliacoes} from './Telas/ListarAvaliacoes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Login}/>
      <Route path='/manterUsuario' component={ManterUsuario}/>
      <Route path='/alunoIndex' component={AlunoIndex}/>
      <Route path='/listarExercicios' component={ListaExercicios}/>
      <Route path='/manterAvaliacao' component={ManterAvaliacao}/>
      <Route path='listarAvaliacoes' component={ListarAvaliacoes}/>
    </Switch>
  </BrowserRouter>,
  document.querySelector('.root')
);

registerServiceWorker();
