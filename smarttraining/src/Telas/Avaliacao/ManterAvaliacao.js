import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {SelectTable} from '../../Components/SelectTable';

export class ManterAvaliacao extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      avaliacao:{
        data: {}
      }
    });

    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount(){
    let url = `http://localhost:8080/servletweb?acao=TelaCadastrarAvaliacao`;
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resultado => this.setState({objetivos: resultado.objetivos}));

    if(this.props.location.state.acao === 'alterar'){
      let aval = this.props.location.state.avaliacao;
      url = `http://localhost:8080/servletweb?acao=MostrarAvaliacao&data=${aval.data}&codCpf=${aval.cpf}`;

      fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(resultado => this.setState({avaliacao: resultado}));
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth()+1;
    let ano = date.getFullYear();

    dia < 10 ? dia = '0' + dia : null;
    mes < 10 ? mes = '0' + mes : null;

    if(this.props.location.state.acao === 'cadastrar'){
      this.setState({
        ...this.state.avaliacao.data.day = dia,
        ...this.state.avaliacao.data.month = mes,
        ...this.state.avaliacao.data.year = ano,
        ...this.state.avaliacao.cpfAluno = this.props.location.state.aluno.cpf,
        ...this.state.avaliacao.cpfInstrutor = this.props.location.state.user.cpf
      });
    }else{
      let data = this.state.avaliacao.data.split('-');
      this.setState({...this.state.avaliacao.data = {}});
      this.setState({
        ...this.state.avaliacao.data.day = data[2],
        ...this.state.avaliacao.data.month = data[1],
        ...this.state.avaliacao.data.year = data[0],
      });
    }

    let data = JSON.stringify(this.state.avaliacao);

    let url = 'http://localhost:8080/servletweb?';

    if(this.props.location.state.acao === 'cadastrar'){
      url += 'acao=CadastrarAvaliacao';
    }else{
      url += 'acao=AlterarAvaliacao';
    }

    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })

  }

  render(){
    return(
      <div>
        <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
        <div>
          <form onSubmit={this.submitHandler}>
            <label htmlFor='peso'>Peso</label>
            <input type='number' id='peso' value={this.state.avaliacao.peso}
              onChange={(e) => this.setState({...this.state.avaliacao.peso = e.target.value})}/>
            <br/>

            <label htmlFor='pgord'>Percentual de Gordura</label>
            <input type='number' id='pgord' value={this.state.avaliacao.percentualGordura}
              onChange={(e) => this.setState({...this.state.avaliacao.percentualGordura = e.target.value})}/>
            <br/>

            <label htmlFor='pesc'>Tamanho do Pescoço</label>
            <input type='number' id='pesc' value={this.state.avaliacao.tamanhoPescoco}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPescoco = e.target.value})}/>
            <br/>

            <label htmlFor='omb'>Tamanho do Ombro</label>
            <input type='number' id='omb' value={this.state.avaliacao.tamanhoOmbro}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoOmbro = e.target.value})}/>
            <br/>

            <label htmlFor='tor'>Tamanho do Tórax</label>
            <input type='number' id='tor' value={this.state.avaliacao.tamanhoTorax}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoTorax = e.target.value})}/>
            <br/>

            <label htmlFor='abd'>Tamanho do Abdômen</label>
            <input type='number' id='abd' value={this.state.avaliacao.tamanhoAbdomen}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAbdomen = e.target.value})}/>
            <br/>

            <label htmlFor='cint'>Tamanho da Cintura</label>
            <input type='number' id='cint' value={this.state.avaliacao.tamanhoCintura}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCintura = e.target.value})}/>
            <br/>

            <label htmlFor='quad'>Tamanho do Quadril</label>
            <input type='number' id='quad' value={this.state.avaliacao.tamanhoQuadril}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoQuadril = e.target.value})}/>
            <br/>

            <label htmlFor='besq'>Tamanho do Braço Esquerdo</label>
            <input type='number' id='besq' value={this.state.avaliacao.tamanhoBracoEsquerdo}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoBracoEsquerdo = e.target.value})}/>
            <br/>

            <label htmlFor='bdir'>Tamanho do Braço Direito</label>
            <input type='number' id='bdir' value={this.state.avaliacao.tamanhoBracoDireito}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoBracoDireito = e.target.value})}/>
            <br/>

            <label htmlFor='antbesq'>Tamanho do Antebraço Esquerdo</label>
            <input type='number' id='antbesq' value={this.state.avaliacao.tamanhoAntebracoEsquerdo}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAntebracoEsquerdo = e.target.value})}/>
            <br/>

            <label htmlFor='antbdir'>Tamanho do Antebraço Direito</label>
            <input type='number' id='antbdir' value={this.state.avaliacao.tamanhoAntebracoDireito}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAntebracoDireito = e.target.value})}/>
            <br/>

            <label htmlFor='cesq'>Tamanho da Coxa Esquerda</label>
            <input type='number' id='cesq' value={this.state.avaliacao.tamanhoCoxaEsquerda}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCoxaEsquerda = e.target.value})}/>
            <br/>

            <label htmlFor='cdir'>Tamanho da Coxa Direita</label>
            <input type='number' id='cdir' value={this.state.avaliacao.tamanhoCoxaDireita}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCoxaDireita = e.target.value})}/>
            <br/>

            <label htmlFor='pesq'>Tamanho da Panturrilha Esquerda</label>
            <input type='number' id='pesq' value={this.state.avaliacao.tamanhoPanturrilhaEsquerda}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPanturrilhaEsquerda = e.target.value})}/>
            <br/>

            <label htmlFor='pdir'>Tamanho da Panturrilha Direita</label>
            <input type='number' id='pdir' value={this.state.avaliacao.tamanhoPanturrilhaDireita}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPanturrilhaDireita = e.target.value})}/>
            <br/>

            <label>Objetivos:</label>
            <SelectTable opcoes={this.state.objetivos} selecionados={this.state.avaliacao.objetivos}
              selectionHandler={(e) => this.setState({...this.state.avaliacao.objetivos = e.data})} header='Objetivo'/>


            <input type='submit' value={this.props.location.state.acao === 'cadastrar' ? 'Cadastrar' : 'Alterar'}/>
          </form>
          <BotaoVoltar/>
        </div>
        <Footer/>
      </div>
    )
  }
}