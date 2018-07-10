import React, { Component } from 'react';

class AddBtn extends Component {
  render() {
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block">Add Task</button>
      </div>
    );
  }
}

export default AddBtn;
