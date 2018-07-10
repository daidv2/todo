import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a className="dropdown-item" href="#">Name ASC</a></li>
            <li><a className="dropdown-item" href="#">Name DESC</a></li>
            <li className="divider" />
            <li><a className="dropdown-item" href="#">Level ASC</a></li>
            <li><a className="dropdown-item" href="#">Level DESC</a></li>
          </ul>
          <span className="label label-success label-medium">NAME - DESC</span>
        </div>
      </div>
    );
  }
}

export default Sort;
