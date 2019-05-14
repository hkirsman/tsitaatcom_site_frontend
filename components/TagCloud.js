import React, { Component } from 'react';
import {Link} from '../routes';

const TagCloud = props => (
  <div id="block-tsitaatcom-tagcloud-tsitaatcom-tagcloud-block-delta"
       className="block block-tsitaatcom-tagcloud ">
    <ul className="tag-cloud">
      {props.tags.map((tag, id) => (
        <li key={id}>
          <Link route={tag.link}>
            <a className={"level" + tag.weight}>{tag.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TagCloud;
