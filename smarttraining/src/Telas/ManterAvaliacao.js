import React from 'react';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {BotaoVoltar} from '..Components/BotaoVoltar;'

export class ManterAvaliacao extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
          
        <Footer/>
      </div>
    )
  }
}
