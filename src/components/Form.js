import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.onClickCancel();
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-7 col-md-5">
          <form action="#" method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only">label</label>
              <input type="text" className="form-control" placeholder="Task Name" ref="task_name" style={{width: 188}}/>
            </div>
            <div className="form-group">
              <label className="sr-only">label</label>
              <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>Hight</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
