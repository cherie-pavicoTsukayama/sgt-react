import React from 'react';

export default function Grade(props) {
  const grade = props.grade;
  function handleClickDeleteGrade() {
    const gradeId = grade.id;
    props.deleteGrade(gradeId);
  }
  return (
    <tr>
      <td>{ grade.name }</td>
      <td>{ grade.course}</td>
      <td>{ grade.grade}</td>
      <td><button type="button" className="btn btn-danger" onClick={ handleClickDeleteGrade }>Delete</button></td>
    </tr>
  );
}
