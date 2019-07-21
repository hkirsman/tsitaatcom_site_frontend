import React, { Component } from 'react';
import Link from 'next/link';
import RetinaImage from 'react-retina-image';

const Logo = props => (
  <Link href="/">
    <a title="Avaleht" rel="home">
      <RetinaImage src="/static/source/img/10-global/logo.png" style={{width: "212px"}} className="logo" />
    </a>
  </Link>
);

export default Logo;
