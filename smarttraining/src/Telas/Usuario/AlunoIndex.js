import React from 'react';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

export class AlunoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>

        <div>
          <div>
            <p>Completar os gráficos!!!!</p>
          </div>
          <div>
            <p>Completar os gráficos!!!!</p>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}
