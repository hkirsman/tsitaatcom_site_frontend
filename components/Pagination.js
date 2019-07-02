import React from 'react';
import {Link} from '../routes';
import { withRouter } from 'next/router'

class Pagination extends React.Component {

  /**
   * Returns HTML for the "previous page" link in a query pager.
   *
   * @todo: not used at the moment and probably will not ever be - this is here from where I wanted to migrate code from Drupal.
   *
   * @param variables
   *   An associative array containing:
   *   - text: The name (or image) of the link.
   *   - element: An optional integer to distinguish between multiple pagers on
   *     one page.
   *   - interval: The number of pages to move backward when the link is clicked.
   *   - parameters: An associative array of query string parameters to append to
   *     the pager links.
   *
   * @ingroup themeable
   */
  pagerPrevious(variables) {
    let text = variables.text;
    // @todo: Not sure if element should be default here or somewhere - in Drupal it seems to be always 0.
    let element = ('element' in variables) ? variables.element : 0;
    // @todo: Not sure if element should be default here or somewhere - in Drupal it seems to be always 1.
    let interval = ('interval' in variables) ? variables.interval : 1;
    let parameters = ('parameters' in variables) ? variables.parameters : {};
    const pager_page_array =  variables.pager_page_array;
    // @todo: null or empty object?
    let output = {};

    // console.log('wtf pager_page_array on serveris ja brauseris erinev');
    // console.log(pager_page_array);

    // If we are anywhere but the first page
    if (pager_page_array[element] > 0) {
      const page_new = this.pagerLoadArray(pager_page_array[element] - interval, element, pager_page_array);

      // If the previous page is the first page, mark the link as such.
      if (page_new[element] == 0) {
        // output = theme('pager_first', array('text' => $text, 'element' => element, 'parameters' => parameters));

        output = this.pagerLink({
          'text': text,
          "page": this.props.pager.page,
          "element": element,
          "parameters": parameters
        });
      }
      // The previous page is not the first page.
      else {
        // output = theme('pager_link', array('text' => $text, 'page_new' => page_new, 'element' => element, 'parameters' => parameters));
        output = this.pagerLink({
          'text': text,
          "page": this.props.pager.page,
          "page_new": page_new,
          "element": element,
          "parameters": parameters
        });
      }
    }

    return output;
  }

  // function theme_pager_next($variables)


  // function theme_pager_last($variables) {


  /**
   * Returns HTML for a link to a specific query result page.
   *
   * @param variables
   *   An associative array containing:
   *   - text: The link text. Also used to figure out the title attribute of the
   *     link, if it is not provided in $variables['attributes']['title']; in
   *     this case, $variables['text'] must be one of the standard pager link
   *     text strings that would be generated by the pager theme functions, such
   *     as a number or t('« first').
   *   - page_new: The first result to display on the linked page.
   *   - element: An optional integer to distinguish between multiple pagers on
   *     one page.
   *   - parameters: An associative array of query string parameters to append to
   *     the pager link.
   *   - attributes: An associative array of HTML attributes to apply to the
   *     pager link.
   *   - page: Originally $_GET['page'] Drupal side but we don't have that here
   *     so we need to pass it as parameter to the function.
   *
   * @see theme_pager()
   *
   * @ingroup themeable
   */
  pagerLink(variables) {
    let text = variables.text;
    let page_new = ('page_new' in variables) ? variables.page_new : {};
    // @todo: Not sure if element should be default here or somewhere - in Drupal it seems to be always 0.
    let element = ('element' in variables) ? variables.element : 0;
    let parameters = ('parameters' in variables) ? variables.parameters : {};
    let attributes = ('attributes' in variables) ? variables.attributes : {};
    let new_page;
    // This is not from original code.
    let link = ('link' in variables) ? variables.link : null;

    const page = ('page' in variables) ? variables.page.toString() : '';
    // Set each pager link title.
    if (!("title" in attributes)) {
      // @todo: why was this static, array assignment is slow?
      // @todo: encoding needed?
      let titles = {
        "\u00ab esimene":"Mine esimesele lehele",
        "\u2039 eelmine":"Mine eelmisele lehele",
        "j\u00e4rgmine \u203a":"Mine j\u00e4rgmisele lehele",
        "viimane \u00bb":"Mine viimasele lehele"
      };
      if (typeof titles[text] !== 'undefined') {
        attributes.title = titles[text];
      }
      else if (Number.isInteger(text)) {
        // @todo: should there be safe include into string?
        attributes.title = 'Mine lehele ' + text;
      }
    }

    // @todo: this was '<a' . drupal_attributes($attributes) . '>' . check_plain($text) . '</a>'; before but I think it's hard to return dom elements here - is this ok?

    return {
      'text': text,
      // @todo: how do we generate link - just get the pager here or be smarter? Used to be attributes['href'] = url($_GET['q'], array('query' => query));
      'link': '/',
      'parameters': parameters,
      'attributes': attributes
    }
  }

  render() {
    // @todo: really this does not change?
    // @todo: scope does not go into functions?
    const element = 0;
    const parameters = {};

    // Prepare for generation loop.
    let i = this.props.pager.pager_first;
    if (this.props.pager.pager_last > this.props.pager.pager_max) {
      // Adjust "center" if at end of query.
      i = i + (this.props.pager.pager_max - this.props.pager.pager_last);
      this.props.pager.pager_last = this.props.pager.pager_max;
    }
    if (i <= 0) {
      // Adjust "center" if at start of query.
      this.props.pager.pager_last = this.props.pager.pager_last + (1 - i);
      i = 1;
    }
    // End of generation loop preparation.

    // @todo: originally there was no initialization, should put on top?
    let items = [];

    if (this.props.pager.pager_total[this.props.pager.element] > 1) {
      items.push(this.pagerLink({
        'text': '« first',
        parameters: {
          'page': 1
        }
      }));

      items.push(this.pagerLink({
        'text': '‹ previous',
        parameters: {
          'page': this.props.pager.page - 1
        }
      }));

      // When there is more than one page, create the pager list.
      if (i != this.props.pager.pager_max) {
        if (i > 1) {
          items.push({
            'class': 'ellipsis',
            'text': '…',
          });
        }
        // Now generate the actual pager piece.
        for (; i <= this.props.pager.pager_last && i <= this.props.pager.pager_max; i++) {
          if (i < this.props.pager.pager_current) {
            items.push(this.pagerLink({
              'text': i,
              parameters: {
                'page': i - 1
              }
            }));
          }
          if (i == this.props.pager.pager_current) {
            items.push({
              'class': 'current',
              'text': i,
            });
          }
          if (i > this.props.pager.pager_current) {
            items.push(this.pagerLink({
              'text': i,
              parameters: {
                'page': i - 1
              }
            }));
          }
        }
        if (i < this.props.pager.pager_max) {
          items.push({
            'class': 'ellipsis',
            'text': '…',
          });
        }
      }

      items.push(this.pagerLink({
        'text': 'next ›',
        parameters: {
          'page': this.props.pager.page + 1
        }
      }));

      items.push(this.pagerLink({
        'text': 'last »',
        parameters: {
          'page': this.props.pager.pager_max - 1
        }
      }));
    }

    return (
      <div className="item-list-pager">
        <ul className="pager">
          {items.map((item, i) => (
            <li key={i} className={item.class}>
              {('parameters' in item) ? (
                <Link route={ this.props.router.asPath.split('?')[0] + '?page=' + item.parameters.page }>
                  <a title={item.attributes.title}>{item.text}</a>
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const PaginationWithRouter = withRouter(Pagination);

export default PaginationWithRouter;
