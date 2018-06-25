import React from 'react';
import {Input} from './Input';
import {Label} from './Label';

export class CampoForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Label htmlFor = {this.props.htmlFor} valor  = {this.props.valor}/>
        <Input tipo = {this.props.tipo} id = {this.props.id}/>
      </div>
    )
  }  
}

// CampoForm.propTypes = {
//   htmlFor: React.PropTypes.string.isRequired,
//   valor: React.PropTypes.string.isRequired,
//   tipo: React.PropTypes.string.isRequired,
//   id: React.PropTypes.string.isRequired
// };
