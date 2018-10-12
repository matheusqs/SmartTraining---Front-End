import React from 'react';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';

export class AlunoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.State = {
      nroTreino: 0,
      treino: [[false, 1, 'supino', 10, 10, 20]]
    };
  }

  setNroTreino = (treino) => {
    switch (treino) {
      case 'A':
        this.setState({nroTreino: 0});
      break;
      case 'B':
        this.setState({nroTreino: 1});
      break;
      case 'C':
        this.setState({nroTreino: 2});
      break;
    }
  }

  iniciarTreino(){

  }

  render(){
    return(
      <div>
        <Header tipo='aluno'/>

        <div>
          <div>
            <p>Completar os gráficos!!!!</p>
          </div>
          <div>
            <p>Completar os gráficos!!!!</p>
          </div>
        </div>

        <div>
          <Button label='A' onClick={this.setNroTreino('A')}/>
          <Button label='Iniciar treino'/>

          <DataTable value={this.state.treino[this.state.nroTreino]}>
            <Column header='Feito' field='feito'/>
            <Column header='Nro Aparelho' field='nroAparelho'/>
            <Column header='Nome' field='nome'/>
            <Column header='Nro Séries' field='nroSeries'/>
            <Column header='Nro Repetições' field='nroRepeticoes'/>
            <Column header='Peso' field='peso'/>
          </DataTable>

          <Button label='Finalizar treino'/>
        </div>
        <Footer/>
      </div>
    );
  }
}
