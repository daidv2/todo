import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';
import AddBtn from './AddBtn';


class Control extends Component {
  render() {
    let {orderBy, orderDir} = this.props;
    return (
      <div className="row">
        {/* Search */}
        <Search onClickGo={this.props.onClickSearchGo}/>
        {/* End seach */}

        {/* Sort */}
        <Sort orderBy={orderBy} orderDir={orderDir} onClickSort={this.props.onClickSort}/>
        {/* End sort */}

        {/* Add */}
        <AddBtn onClickAdd={this.props.onClickAdd} isShowForm={this.props.isShowForm}/>
        {/* End Add */}
      </div>
    );
  }
}

export default Control;
