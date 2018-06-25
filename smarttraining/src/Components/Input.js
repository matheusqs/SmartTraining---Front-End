import React from 'react';

export class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <input type = {this.props.tipo} id = {this.props.id} />;
  }
}

// Input.propTypes = {
//   tipo: React.PropTypes.string.isRequired,
//   id: React.PropTypes.string.isRequired
// };
