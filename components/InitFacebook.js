import React, { Component } from 'react';
import Script from 'react-load-script'

/**
 * Code for initializing Facebook.
 *
 * There are some attributes originally on the script like: async defer
 * crossorigin="anonymous"
 * . Should we use these?
 */
class InitFacebook extends Component {
  render(){
    return (
      <div>
        <div id="fb-root"></div>
        <Script url="https://connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v3.3&appId=188929011649" />
      </div>
    )
  }
}

export default InitFacebook;
