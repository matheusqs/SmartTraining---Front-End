import React from 'react';

export class BotaoVoltar extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  render(){
    return <input type='button' onClick={this.context.router.history.goBack} value='Voltar'/>
  }
}
