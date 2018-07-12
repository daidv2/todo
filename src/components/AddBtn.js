import React, {Component} from 'react';

class AddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.onClickAdd();
  }

  render() {
    let elmButton = <button type="button" onClick={this.handleAdd} className="btn btn-info btn-block">Add Task</button>;
    if (this.props.isShowForm) {
      elmButton =
        <button type="button" onClick={this.handleAdd} className="btn btn-success btn-block">Close Form</button>
    }
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{elmButton}</div>
    );
  }
}

export default AddBtn;
