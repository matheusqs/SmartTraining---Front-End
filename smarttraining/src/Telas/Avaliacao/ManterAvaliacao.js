import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {SelectTable} from '../../Components/SelectTable';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';

export class ManterAvaliacao extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      avaliacao:{
        cpfInstrutor: null,
        cpfAluno: null,
        peso: null,
        percentualGordura: null,
        tamanhoPescoco: null,
        tamanhoOmbro: null,
        tamanhoTorax: null,
        tamanhoAbdomen: null,
        tamanhoCintura: null,
        tamanhoQuadril: null,
        massaGorda: null,
        tamanhoBracoEsquerdo: null,
        tamanhoBracoDireito: null,
        tamanhoAntebracoEsquerdo: null,
        tamanhoAntebracoDireito: null,
        tamanhoCoxaEsquerda: null,
        tamanhoCoxaDireita: null,
        tamanhoPanturrilhaEsquerda: null,
        tamanhoPanturrilhaDireita: null,
        objetivos: [],
        data: null
      },
      aluno: null
    });

    this.submitHandler = this.submitHandler.bind(this);
    this.selectionHandler = this.selectionHandler.bind(this);
  }

  componentDidMount(){
    let url = `http://localhost:8080/servletweb?acao=telaCadastrarAvaliacao`;
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resultado => this.setState({objetivos: resultado.listaObjetivos}))

    url = `http://localhost:8080/servletweb?acao=ListarAlunos`;
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resultado => this.setState({alunos: resultado}));

    if(this.props.location.state.acao !== 'alterar'){
      return;
    }

    url = `http://localhost:8080/servletweb?acao=MostrarAvaliacao&data=${this.props.location.state.avaliacao.data}&codCpf=${this.props.location.state.avaliacao.cpfAluno}`;
    
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resultado => {
      this.setState({...this.state.avaliacao = resultado})
    });
  }

  submitHandler = (e) => {
    e.preventDefault();

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth()+1;
    let ano = date.getFullYear();
    
    dia < 10 ? dia = '0' + dia : null;
    mes < 10 ? mes = '0' + mes : null;

    this.setState({
      ...this.state.avaliacao.day = dia,
      ...this.state.avaliacao.month = mes,
      ...this.state.avaliacao.year = ano
    });

    let data = Object.entries(this.state.avaliacao).map(state => {
      return encodeURIComponent(state[0]) + '=' + encodeURIComponent(state[1])
    });

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

  selectionHandler = (e) => {
    this.setState({
      objetivosSelecionados: e.data,
      ...this.state.avaliacao.objetivos = e.data
    });
  }

  render(){
    return(
      <div>
        <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
        <div>
          {
            this.props.location.state.acao === 'cadastrar' ?
            <Dropdown value={this.state.aluno.nome} options={this.state.alunos.nome} placeholder='Selecione um aluno' 
            onChange={(e) => this.setState({aluno: e.value})} /> :
            <p>Aluno: {this.state.aluno}</p>
          }

          <form onSubmit={this.submitHandler}>
            <label htmlFor='peso'>Peso</label>
            <InputText id='peso' value={this.state.avaliacao.peso}
              onChange={(e) => this.setState({...this.state.avaliacao.peso = e.target.value})}/>
            <br/>

            <label htmlFor='pgord'>Percentual de Gordura</label>
            <InputText id='pgord' value={this.state.avaliacao.percentualGordura}
              onChange={(e) => this.setState({...this.state.avaliacao.percentualGordura = e.target.value})}/>
            <br/>

            <label htmlFor='pesc'>Tamanho do Pescoço</label>
            <InputText id='pesc' value={this.state.avaliacao.tamanhoPescoco}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPescoco = e.target.value})}/>
            <br/>

            <label htmlFor='omb'>Tamanho do Ombro</label>
            <InputText id='omb' value={this.state.avaliacao.tamanhoOmbro}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoOmbro = e.target.value})}/>
            <br/>

            <label htmlFor='tor'>Tamanho do Tórax</label>
            <InputText id='tor' value={this.state.avaliacao.tamanhoTorax}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoTorax = e.target.value})}/>
            <br/>

            <label htmlFor='abd'>Tamanho do Abdômen</label>
            <InputText id='abd' value={this.state.avaliacao.tamanhoAbdomen}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAbdomen = e.target.value})}/>
            <br/>

            <label htmlFor='cint'>Tamanho da Cintura</label>
            <InputText id='cint' value={this.state.avaliacao.tamanhoCintura}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCintura = e.target.value})}/>
            <br/>

            <label htmlFor='quad'>Tamanho do Quadril</label>
            <InputText id='quad' value={this.state.avaliacao.tamanhoQuadril}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoQuadril = e.target.value})}/>
            <br/>

            <label htmlFor='besq'>Tamanho do Braço Esquerdo</label>
            <InputText id='besq' value={this.state.avaliacao.tamanhoBracoEsquerdo}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoBracoEsquerdo = e.target.value})}/>
            <br/>

            <label htmlFor='bdir'>Tamanho do Braço Direito</label>
            <InputText id='bdir' value={this.state.avaliacao.tamanhoBracoDireito}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoBracoDireito = e.target.value})}/>
            <br/>

            <label htmlFor='antbesq'>Tamanho do Antebraço Esquerdo</label>
            <InputText id='antbesq' value={this.state.avaliacao.tamanhoAntebracoEsquerdo}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAntebracoEsquerdo = e.target.value})}/>
            <br/>

            <label htmlFor='antbdir'>Tamanho do Antebraço Direito</label>
            <InputText id='antbdir' value={this.state.avaliacao.tamanhoAntebracoDireito}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoAntebracoDireito = e.target.value})}/>
            <br/>

            <label htmlFor='cesq'>Tamanho da Coxa Esquerda</label>
            <InputText id='cesq' value={this.state.avaliacao.tamanhoCoxaEsquerda}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCoxaEsquerda = e.target.value})}/>
            <br/>

            <label htmlFor='cdir'>Tamanho da Coxa Direita</label>
            <InputText id='cdir' value={this.state.avaliacao.tamanhoCoxaDireita}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoCoxaDireita = e.target.value})}/>
            <br/>

            <label htmlFor='pesq'>Tamanho da Panturrilha Esquerda</label>
            <InputText id='pesq' value={this.state.avaliacao.tamanhoPanturrilhaEsquerda}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPanturrilhaEsquerda = e.target.value})}/>
            <br/>

            <label htmlFor='pdir'>Tamanho da Panturrilha Direita</label>
            <InputText id='pdir' value={this.state.avaliacao.tamanhoPanturrilhaDireita}
              onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPanturrilhaDireita = e.target.value})}/>
            <br/>

            <SelectTable opcoes={this.state.objetivos} selecionados={this.state.objetivosSelecionados} 
              selectionHandler={this.selectionHandler} header='Objetivo'/>


            <Button label={this.props.location.state.acao === 'cadastrar' ? 'Cadastrar' : 'Alterar'}/>
          </form>
          <BotaoVoltar/>
        </div>
        <Footer/>
      </div>
    )
  }
}
