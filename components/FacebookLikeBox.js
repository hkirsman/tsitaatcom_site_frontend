import React, { Component } from 'react';
import Script from 'react-load-script'


class FacebookLikeBox extends Component {
  render(){
    return (
      <div>
        <div id="fb-root"></div>

        <div className="fb-page" data-href="https://www.facebook.com/tsitaadid/"
             data-tabs="" data-width="500" data-height="180"
             data-small-header="true" data-adapt-container-width="true"
             data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/tsitaadid/"
                      className="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/tsitaadid/">Tsitaat.com - Eesti
            parim online tsitaadikogu</a></blockquote>
        </div>

        <Script url="https://connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v3.3&appId=129895127088608" />
        </div>

    )
  }
}

export default FacebookLikeBox;
