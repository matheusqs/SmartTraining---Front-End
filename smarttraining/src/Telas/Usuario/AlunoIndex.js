import React from 'react';
import {Chart} from 'primereact/chart';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

export class AlunoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      ficha: {},
      avaliacoes: []
    });
  }

  componentDidMount = () => {
    let url = `http://localhost:8080/servletweb?acao=MostrarUltimaFicha&codCpf=${this.props.location.state.user.cpf}`;
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(resultado => this.setState({ficha: resultado}));

    url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.props.location.state.user.cpf}`;
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(resultado => this.setState({avaliacoes: resultado}));
  }

  render(){
    let treinos;
    if(this.state.ficha.treinos){
      treinos = this.state.ficha.treinos.map((treino, i) =>
        <li key={i}>
        <div className="center">
          <h2>Treino {treino.numero}</h2>
          <table>
            <tr>
              <th>Aparelho</th>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Peso</th>
            </tr>
            {treino.atividades.map((atividade, j) =>
              <tr>
                <th>{atividade.nroAparelho}</th>
                <th>{atividade.nomExercicio}</th>
                <th>{atividade.nroSeries}</th>
                <th>{atividade.nroRepeticoes}</th>
                <th>{atividade.qtdPeso}</th>
              </tr>
            )}
          </table>
          </div>
        </li>
      );
    }

    let aval = [];
    let peso = [];
    let perc = [];
    for(let avaliacao of this.state.avaliacoes){
      aval.push(avaliacao.data);
      peso.push(avaliacao.peso)
      perc.push(avaliacao.percentualGordura);
    }
    console.log(aval + ' ' + peso + ' ' + perc);  
    let data = {
      labels: aval,
      datasets: [
        {
          label: 'Peso',
          data: peso,
          fill: false,
          backgroundColor: '#00fff2',
          borderColor: '#00fff2'
        },
        {
          label: 'Percentual de gordura',
          data: perc,
          fill: false,
          backgroundColor: '#00ff00',
          borderColor: '#00ff00'
        }
      ]
    };

    return(
      <div>
        <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>

        <div>
            <Chart type='line' data={data}/>
        </div>

        <div>
          <ul>{treinos}</ul>
        </div>

        <Footer/>
      </div>
    );
  }
}
