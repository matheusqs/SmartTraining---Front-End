import React from 'react';
import {Button} from 'primereact/button';

export class BotaoVoltar extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  render(){
    return <Button onClick={this.context.router.history.goBack} label='Voltar'/>
  }
}
