import React from 'react';

export class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <label htmlFor = {this.props.htmlFor}> {this.props.valor}</label>
  }
}

// Label.propTypes = {
//   htmlFor: React.PropTypes.string.isRequired,
//   valor: React.PropTypes.string.isRequired
// };
