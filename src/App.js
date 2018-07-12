import React, {Component} from 'react';
import {filter, includes} from 'lodash';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './mocks/task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: ''
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSeach = this.handleSeach.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  closeForm() {
    this.setState({
      isShowForm: false
    });
  }

  handleSeach(value) {
    this.setState({
      strSearch: value
    });
  }

  render() {
    const search = this.state.strSearch.toLowerCase();
    // Prevent change this.state.items from itemsOrigin
    let itemsOrigin = [...this.state.items];
    let items = [];
    let isShowForm = this.state.isShowForm;
    let elmForm = null;

    // Search use library Lodash
    if (search.length > 0) {
      items = filter(itemsOrigin, function (item) {
        return includes(item.name.toLowerCase(), search);
      });
    } else {
      items = itemsOrigin;
    }

    if (isShowForm) {
      elmForm = <Form onClickCancel={this.closeForm}/>
    }

    return (
      <div>
        {/* Title */}
        <Title />
        {/* End title */}

        {/* Control */}
        <Control
          onClickSearchGo={this.handleSeach}
          onClickAdd={this.handleToggleForm}
          isShowForm={isShowForm}
          strSearch={this.state.strSearch}/>
        {/* End Control */}

        {/* Form */}
        {elmForm}
        {/* End form */}

        {/* List */}
        <List items={items}/>
        {/* End list */}
      </div>
    );
  }
}

export default App;
