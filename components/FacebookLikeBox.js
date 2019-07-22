import React, { Component } from 'react';


class FacebookLikeBox extends Component {
  render(){
    return (
      <div>
        <div className="fb-page" data-href="https://www.facebook.com/tsitaadid/"
             data-tabs="" data-width="500" data-height="180"
             data-small-header="true" data-adapt-container-width="true"
             data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/tsitaadid/"
                      className="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/tsitaadid/">Tsitaat.com - Eesti
            parim online tsitaadikogu</a></blockquote>
        </div>
      </div>
    )
  }
}

export default FacebookLikeBox;
