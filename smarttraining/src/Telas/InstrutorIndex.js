import React from 'react';  
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';

export class InstrutorIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user} />
                <div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}