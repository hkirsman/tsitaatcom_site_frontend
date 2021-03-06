import React, { Component } from 'react';

const Smartad = props => (
  <script dangerouslySetInnerHTML={{__html: `
    var _smartad = _smartad || new Object();
    _smartad.page_id = Math.floor(Math.random()*10000001);
    if (!_smartad.prop) {
      _smartad.prop = 'screen_width='+(document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth)+decodeURIComponent('%26screen_height=')+(document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight)+decodeURIComponent('%26os=')+navigator.platform+decodeURIComponent('%26refurl=')+encodeURIComponent(document.referrer||'')+decodeURIComponent('%26pageurl=')+encodeURIComponent(document.URL||'')+decodeURIComponent('%26rnd=')+ new Date().getTime();
    }
    (function() {
      _smartad.type = 'onload';
      var f = function() {
        if (_smartad.space) {
          _smartad.space += ',dd847202-80a4-4a79-9379-509a63f64a87';
        } else {
          _smartad.space = 'dd847202-80a4-4a79-9379-509a63f64a87';
          var d = document, b = d.body || d.documentElement || d.getElementsByTagName('BODY')[0],n = b.firstChild, s = d.createElement('SCRIPT');
          s.type = 'text/javascript',s.language = 'javascript',s.async = true,s.charset='UTF-8';
          s.src=(location.protocol == 'https:' ? 'https:' : 'http:')+'//serving.bepolite.eu/script?space=' + _smartad.space + ''+decodeURIComponent('%26type=direct%26page_id=')+_smartad.page_id+decodeURIComponent('%26')+_smartad.prop;
          n?b.insertBefore(s, n):b.appendChild(s);
        };
      }
      if (document.readyState==='complete') {
        f();
        delete _smartad.space;
      } else {
        if (window.addEventListener) {
          window.addEventListener('load', f, false);
        } else if(window.attachEvent) {
          window.attachEvent('onload', f);
        }
      }
    })();
  `}} />
);

export default Smartad;
