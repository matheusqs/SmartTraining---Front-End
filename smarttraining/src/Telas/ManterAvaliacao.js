import React from 'react';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {BotaoVoltar} from '../Components/BotaoVoltar';
import {InputMask} from 'primereact/inputmask';
import {Dropdown} from 'primereact/dropdown';

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

    });
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <div>
        {/*<Header/>
          {this.props.location.state.acao === 'cadastrar' ? (
            <Dropdown value={this.state.aluno} options={this.state.alunos}
            onChange={(e) => {this.setState({aluno: e.value})}} placeholder='Selecione um aluno'/>
          ) : (
            <p>Aluno: {this.state.aluno}</p>
          )}

          <form onSubmit={submitHandler} formAction='POST'>
            <label htmlFor='peso'>Peso</label>
            <InputMask id='peso' value={this.state.avaliacao.peso} mask='999'
            onChange={(e) => this.setState({...this.state.avaliacao.peso = e.target.value})}/>
            <br/>

            <label htmlFor='percGord'>Percentual de Gordura</label>
            <InputMask id='percGord' value={this.state.avaliacao.percentualGordura}
            onChange={(e) => this.setState({...this.state.avaliacao.percentualGordura = e.target.value})} keyfilter={/^0*(100\.00|[0-9]?[0-9]\.[0-9]{2})%$}/>
            <br/>

            <label htmlFor='tamPes'>Tamanho do Pescoço</label>
            <InputMask id='tamPes' value={this.state.avaliacao.tamanhoPescoco} mask='999.99'
            onChange={(e) => this.setState({...this.state.avaliacao.tamanhoPescoco = e.target.value})} />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

            <label htmlFor=''></label>
            <InputMask id='' />
            <br/>

          </form>
          <BotaoVoltar/>
        <Footer/>*/}
      </div>
    )
  }
}
