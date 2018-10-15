import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {ListExercicios} from '../Components/ListExercicios';

export class CadastrarFicha extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aluno: null,
      treinos: [],
      treino: null,
      exercicios: []
    };

    this.onExercicioChange = this.onExercicioChange.bind(this);
    this.repeticoesEditor = this.repeticoesEditor.bind(this);
    this.adicionarTreino = this.adicionarTreino.bind(this);
    this.aparelhoEditor = this.aparelhoEditor.bind(this);
    this.removerTreino = this.removerTreino.bind(this);
    this.seriesEditor = this.seriesEditor.bind(this);
    this.pesoEditor = this.pesoEditor.bind(this);
  }

  onExercicioChange = (e) => {
    let exerciciosSelecionados = this.state.exercicios;

    e.checked ? exerciciosSelecionados.push(e.value) : exerciciosSelecionados.splice(exerciciosSelecionados.indexOf(e.value), 1);
    this.setState({exercicios: exerciciosSelecionados});
  }

  adicionarTreino = () => {

  }

  removerTreino = () => {
    let treinos = this.state.treinos;
    treinos.splice(treinos.indexOf(this.state.treino), 1);

    this.setState({treinos: treinos, treino: 0});
  }

  onEditorValueChange = (props, value) => {
    let exerciciosAtualizados = [...props.value];
    exerciciosAtualizados[props.rowIndex][props.field] = value;
    this.setState({exercicios: exerciciosAtualizados});
  }

  inputTextEditor = (props, field) => {
    return <InputText value={props.rowData.} keyfilter='pint'/>
  }

  aparelhoEditor = (props) => {

  }

  seriesEditor = () => {

  }

  repeticoesEditor = () => {

  }

  pesoEditor = () => {

  }

  render(){
    return(
      <div>
        <Header tipo={this.props.tipo}/>

        <Dropdown value={this.state.aluno} options={this.state.alunos} onChange={(e) => {this.setState({aluno: e.value})}}/>
        <ListExercicios mustCheckbox={true} onExercicioChange={this.onExercicioChange}/>

        <Dropdown value={this.state.treino} options={this.state.treinos} onChange={(e) => {this.setState({treino: e.value})}}/>
        <Button label='+ Treino' onClick={this.adicionarTreino}/>
        <Button label='- Treino' onClick={this.removerTreino}/>

        <DataTable value={this.state.exercicios} editable={true} reorderableRows={true} onRowReorder={(e) => this.setState({exercicios: e.value})}>
          <Column rowReorder={true}/>
          <Column columnKey='nroAparelho' header='Nro Aparelho' field='nroAparelho' editor={this.aparelhoEditor}/>
          <Column columnKey='nome' header='Nome' field='nome'/>
          <Column columnKey='nroSeries' header='Nro Séries' field='nroSeries' editor={this.seriesEditor}/>
          <Column columnKey='nroRepeticoes' header='Nro Repetições' field='nroRepeticoes' editor={this.repeticoesEditor}/>
          <Column columnKey='peso' header='Peso' field='peso' editor={this.pesoEditor}/>
        </DataTable>

        <Footer/>
      </div>
    );
  }
}
