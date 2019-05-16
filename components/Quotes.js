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
          <Quote quote={quote} key={i} i={i}></Quote>
        ))}
        <Pagination />
      </div>
    )
  }
}

export default Quotes;
