import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export class Objetivos extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <label>Selecione o(s) objetivo(s)</label>
                <DataTable value={this.props.objetivos} selection={this.props.objetivosSelecionados} onSelectionChange={this.props.selectionHandler}>
                    <Column selectionMode='multiple'/>
                    <Column field='nome' header='Objetivo'/>                
                </DataTable>
            </div>
        )
    }
}