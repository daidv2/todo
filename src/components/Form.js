import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateItem(item){
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level
      });
    }
  }

  componentWillMount() {
    this.updateItem(this.props.itemSelected);
  }

  componentWillReceiveProps(nextProps) {
    this.updateItem(nextProps.itemSelected);
  }

  handleCancel() {
    this.props.onClickCancel();
  }

  handleSubmit(event) {
    event.preventDefault();
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level
    };
    this.props.onClickSubmit(item);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-7 col-md-5">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group">
              <label className="sr-only">label</label>
              <input type="text" name="task_name" value={this.state.task_name} onChange={this.handleChange}
                     className="form-control" placeholder="Task Name" style={{width: 188}}/>
            </div>
            <div className="form-group">
              <label className="sr-only">label</label>
              <select name="task_level" value={this.state.task_level} onChange={this.handleChange}
                      className="form-control" required="required">
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>Hight</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
