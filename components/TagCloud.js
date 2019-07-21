import React, { Component } from 'react';
import {Link} from '../routes';

const TagCloud = props => (
  <ul className="tag-cloud">
    {props.tags.map((tag, id) => (
      <li key={id} className="tag-cloud__item">
        <Link route={tag.link}>
          <a className={"level" + tag.weight}>{tag.name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default TagCloud;
