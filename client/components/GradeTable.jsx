import React from 'react';
import Grade from './Grade';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th className="col-2">Student Name</th>
            <th className="col">Course</th>
            <th className="col-3">Grade</th>
          </tr>
        </thead>
        <tbody>
          <Grade grades={ this.props.grades }/>
        </tbody>
      </table>
    );
  }
}
