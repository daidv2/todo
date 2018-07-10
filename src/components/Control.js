import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import AddBtn from './AddBtn';


class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <Search />
        {/* End seach */}

        {/* Sort */}
        <Sort />
        {/* End sort */}

        {/* Add */}
        <AddBtn />
        {/* End Add */}
      </div>
    );
  }
}

export default Control;
