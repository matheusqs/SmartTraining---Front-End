import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Login} from './Telas/Login';

import {ManterUsuario} from './Telas/Usuario/ManterUsuario';
import {AlunoIndex} from './Telas/Usuario/AlunoIndex';
import {InstrutorIndex} from './Telas/Usuario/InstrutorIndex';
import {CoordenadorIndex} from './Telas/Usuario/CoordenadorIndex';
import {ListarAlunos} from './Telas/Usuario/ListarAlunos';
import {ListarInstrutores} from './Telas/Usuario/ListarInstrutores';
import {VerPerfil} from './Telas/Usuario/VerPerfil';

import {ListarExercicios} from './Telas/Exercicio/ListarExercicios';
import {ManterExercicio} from './Telas/Exercicio/ManterExercicio';
import {RemoverExercicio} from './Telas/Exercicio/RemoverExercicio';
import {VerExercicio} from './Telas/Exercicio/VerExercicio';

import {ListarAvaliacoes} from './Telas/Avaliacao/ListarAvaliacoes';
import {ManterAvaliacao} from './Telas/Avaliacao/ManterAvaliacao';
import {RemoverAvaliacao} from './Telas/Avaliacao/RemoverAvaliacao';
import {VerAvaliacao} from './Telas/Avaliacao/VerAvaliacao';

import {ListarAparelhos} from './Telas/Aparelho/ListarAparelhos';
import {ManterAparelho} from './Telas/Aparelho/ManterAparelho';
import {RemoverAparelho} from './Telas/Aparelho/RemoverAparelho';
import {VerAparelho} from './Telas/Aparelho/VerAparelho';

import {ListarFichas} from './Telas/Ficha/ListarFichas';
import {VerFicha} from './Telas/Ficha/VerFicha';

import {ListarMusculos} from './Telas/Musculo/ListarMusculos';
import {VerMusculo} from './Telas/Musculo/VerMusculo';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Login}/>

      <Route path='/manterUsuario' component={ManterUsuario}/>
      <Route path='/alunoIndex' component={AlunoIndex}/>
      <Route path='/instrutorIndex' component={InstrutorIndex}/>
      <Route path='/coordenadorIndex' component={CoordenadorIndex}/>
      <Route path='/listarAlunos' component={ListarAlunos}/>
      <Route path='/listarInstrutores' component={ListarInstrutores}/>
      <Route path='/verPerfil' component={VerPerfil}/>

      <Route path='/listarAparelhos' component={ListarAparelhos}/>
      <Route path='/manterAparelho' component={ManterAparelho}/>
      <Route path='/removerAparelho' component={RemoverAparelho}/>
      <Route path='/verAparelho' component={VerAparelho}/>
      
      <Route path='/listarAvaliacoes' component={ListarAvaliacoes}/>
      <Route path='/manterAvaliacao' component={ManterAvaliacao}/>
      <Route path='/removerAvaliacao' component={RemoverAvaliacao}/>
      <Route path='/verAvaliacao' component={VerAvaliacao}/>

      <Route path='/listarExercicios' component={ListarExercicios}/>
      <Route path='/manterExercicio' component={ManterExercicio}/>
      <Route path='/removerExercicio' component={RemoverExercicio}/>
      <Route path='/verExercicio' component={VerExercicio}/>

      <Route path='/listarFichas' component={ListarFichas}/>
      <Route path='/verFicha' component={VerFicha}/>

      <Route path='/listarMusculos' component={ListarMusculos}/>
      <Route path='/verMusculo' component={VerMusculo}/>
    </Switch>
  </BrowserRouter>,
  document.querySelector('.root')
);

registerServiceWorker();