import React, {Component} from 'react';

class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p className="h1">{this.props.fake_title}</p>
      </div>
    );
  }
}

export default Title;
