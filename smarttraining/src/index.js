import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Login} from './Telas/Login';
import {ManterUsuario} from './Telas/ManterUsuario';
import {AlunoIndex} from './Telas/AlunoIndex';
import {ListarExercicios} from './Telas/Exercicio/ListarExercicios';
import {ManterAvaliacao} from './Telas/Avaliacao/ManterAvaliacao';
import {ListarAvaliacoes} from './Telas/Avaliacao/ListarAvaliacoes';
import {RemoverAvaliacao} from './Telas/Avaliacao/RemoverAvaliacao'
import {VerAvaliacao} from './Telas/Avaliacao/VerAvaliacao';
import registerServiceWorker from './registerServiceWorker';
import { InstrutorIndex } from './Telas/InstrutorIndex';
import { ListarAlunos } from './Telas/ListarAlunos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Login}/>
      <Route path='/manterUsuario' component={ManterUsuario}/>
      <Route path='/alunoIndex' component={AlunoIndex}/>
      <Route path='/listarExercicios' component={ListarExercicios}/>
      <Route path='/manterAvaliacao' component={ManterAvaliacao}/>
      <Route path='/listarAvaliacoes' component={ListarAvaliacoes}/>
      <Route path='/removerAvaliacao' component={RemoverAvaliacao}/>
      <Route path='/verAvaliacao' component={VerAvaliacao}/>
      <Route path='/instrutorIndex' component={InstrutorIndex}/>
      <Route path='/listarAlunos' component={ListarAlunos} />
    </Switch>
  </BrowserRouter>,
  document.querySelector('.root')
);

registerServiceWorker();