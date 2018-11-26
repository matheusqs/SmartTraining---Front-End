import React from 'react';
import '../css/button.css';

export class BotaoVoltar extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  render(){
    return <button type='button' className="btn" onClick={this.context.router.history.goBack}>Voltar</button>
  }
}
