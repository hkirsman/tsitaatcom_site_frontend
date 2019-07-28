import React, { Component } from 'react';
import {Link} from '../routes';

const TagCloud = props => (
  <div>
    <h2 class="element-invisible">Populaarsemad tsitaadide lehed</h2>
    <ul className="tag-cloud">
      {props.tags.map((tag, id) => (
        <li key={id} className="tag-cloud__item">
          <Link route={tag.link}>
            <a className={"level" + tag.weight}>{tag.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>

);

export default TagCloud;
