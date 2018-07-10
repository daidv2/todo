import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">List Task</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr><th style={{width: '10%'}} className="text-center">#</th>
                <th>Task</th>
                <th style={{width: '20%'}} className="text-center">Level</th>
                <th style={{width: '20%'}}>Action</th>
              </tr></thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>aaaaaaaaaa</td>
                <td className="text-center"><span className="label label-danger">Hight</span></td>
                <td>
                  <button type="button" className="btn- btn-warning">Edit</button>
                  <button type="button" className="btn- btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
