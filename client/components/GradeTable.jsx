import React from 'react';
import Grade from './Grade';

export default function GradeTable(props) {
  function getGrade() {
    return (
      props.grades.map(grade => {
        return (<Grade key={ grade.id } grade={ grade } deleteGrade={ props.deleteGrade }/>);
      })
    );
  }

  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {getGrade()}
      </tbody>
    </table>
  );
}
