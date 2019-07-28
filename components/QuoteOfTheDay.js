import React, { Component } from 'react';
import {Link} from '../routes';
import Quote from '../components/Quote'

class QuoteOfTheDay extends Component {
  render() {
    return (
      <div class="quote-of-the-day">
        <h2 class="element-invisible">Päeva tsitaat</h2>
        <Quote
          quote={this.props.quote[0]}
          hide_author_image={true}
          hide_voting={true}
          hide_quote_info={true}
          cookies={this.props.cookies} />
      </div>
    )
  }
}

export default QuoteOfTheDay;
