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
                <DataTable value={this.props.opcoes} selection={this.props.selecionados} onSelectionChange={this.props.selectionHandler}>
                    <Column selectionMode="multiple" style={{width:'2em'}}/>
                    <Column field={!this.props.fielder ? 'nome' : this.props.fielder} header={this.props.header}/>                
                </DataTable>
            </div>
        )
    }
}