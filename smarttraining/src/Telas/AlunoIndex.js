import React from 'react';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';

export class AlunoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.State = ({
      treino: 'A'
    });
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
          <Button label='A'/>
          <Button label='Iniciar treino'/>
          <DataTable>
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
    )
  }
}
