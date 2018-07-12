import React, {Component} from 'react';

class Item extends Component {
  showLevelElement(level) {
    let elmLevel = <span className="label label-default">Small</span>;
    if (level === 1) {
      elmLevel = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    }
    return elmLevel;
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
          <button type="button" className="btn- btn-warning">Edit</button>
          <button type="button" className="btn- btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
