import React, {Component} from 'react';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';

import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

//import tasks from './mocks/task';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemSelected: null,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc'
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSeach = this.handleSeach.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({
      items: tasks
    });
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
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

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  }

  handleDelete(id) {
    let items = this.state.items;
    remove(items, function (item) {
      return item.id === id;
    });
    this.setState({
      items: items
    });
    localStorage.setItem('tasks', JSON.stringify(items));
  }

  handleSubmit(item) {
    let items = this.state.items;
    let id = null;

    if (item.id !== '') {
      // Edit
      items = reject(items, {id: item.id});
      id = item.id;
    } else {
      // Add
      id = uuidv4();
    }

    items.push({
      id: id,
      name: item.name,
      level: +item.level
    });

    this.setState({
      items: items,
      isShowForm: false
    });

    localStorage.setItem('tasks', JSON.stringify(items));
  }

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm: true
    });
  }

  render() {
    const strSearch = this.state.strSearch;
    // Prevent change this.state.items from itemsOrigin
    let itemsOrigin = [...this.state.items];
    let items = [];
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    // Let declare
    let {orderBy, orderDir} = this.state;

    // Search use library Lodash
    if (strSearch.length > 0) {
      items = filter(itemsOrigin, function (item) {
        return includes(item.name.toLowerCase(), strSearch.toLowerCase());
      });
    } else {
      items = itemsOrigin;
    }

    // Sort items
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if (isShowForm) {
      elmForm = <Form
        onClickCancel={this.closeForm}
        onClickSubmit={this.handleSubmit}
        itemSelected={this.state.itemSelected}
      />
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
          strSearch={this.state.strSearch}
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSort={this.handleSort}
        />
        {/* End Control */}

        {/* Form */}
        {elmForm}
        {/* End form */}

        {/* List */}
        <List items={items} onClickDelete={this.handleDelete} onClickEdit={this.handleEdit}/>
        {/* End list */}
      </div>
    );
  }
}

export default App;
