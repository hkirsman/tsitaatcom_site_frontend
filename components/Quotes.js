import React, { Component } from 'react';
import Quote from './Quote';
import Pagination from './Pagination';

class Quotes extends Component {
  componentDidMount() {
    document.querySelector("body").classList.add('has-quotes')
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove('has-quotes')
  }

  render() {
    return (
      <div>
        {this.props.quotes.map((quote, i) => (
          <Quote
            quote={quote}
            hide_author_name={this.props.hide_author_name}
            hide_author_image={this.props.hide_author_image}
            hide_author_profession={this.props.hide_author_profession}
            cookies={this.props.cookies}
            key={i}
            i={i} />
        ))}
        {typeof this.props.pager !== 'undefined' && <Pagination pager={this.props.pager} />}
      </div>
    )
  }
}

export default Quotes;
