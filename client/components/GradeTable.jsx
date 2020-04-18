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
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <Grade grades={ this.props.grades }/>
        </tbody>
      </table>
    );
  }
}
