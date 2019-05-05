import React from 'react';

const Pagination = props => (
  <div className="item-list-pager">
    <ul className="pager">
      <li className="current first"><span>1</span></li>
      <li><a title="Mine lehele 2" href="/latest-quotes?page=1">2</a></li>
      <li><a title="Mine lehele 3" href="/latest-quotes?page=2">3</a></li>
      <li><a title="Mine lehele 4" href="/latest-quotes?page=3">4</a></li>
      <li><a title="Mine lehele 5" href="/latest-quotes?page=4">5</a></li>
      <li className="ellipsis"><span>…</span></li>
      <li className="next"><a title="Mine järgmisele lehele"
                              href="/latest-quotes?page=1">järgmine ›</a></li>
      <li className="last"><a title="Mine viimasele lehele"
                              href="/latest-quotes?page=407">viimane »</a></li>
    </ul>
  </div>
);

export default Pagination;
