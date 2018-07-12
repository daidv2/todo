import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  showLevelElement(level) {
    let elmLevel = <span className="label label-default">Small</span>;
    if (level === 1) {
      elmLevel = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    }
    return elmLevel;
  }

  handleDelete(id) {
    this.props.onClickDelete(id);
  }

  handleEdit(item) {
    this.props.onClickEdit(item);
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.showLevelElement(item.level)}</td>
        <td>
          <button type="button" onClick={() => this.handleEdit(item)} className="btn- btn-warning">Edit</button>
          <button type="button" onClick={() => this.handleDelete(item)} className="btn- btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
