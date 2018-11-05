import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export class SelectTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <label>Selecione o(s) objetivo(s)</label>
                <DataTable value={this.props.opcoes} selection={this.props.selecionados} onSelectionChange={this.props.selectionHandler}>
                    <Column selectionMode='multiple'/>
                    <Column field='nome' header={this.props.header}/>                
                </DataTable>
            </div>
        )
    }
}