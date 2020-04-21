import React from 'react';

export default function Grade(props) {
  const grade = props.grade;
  function handleClickDeleteGrade() {
    const gradeId = grade.id;
    props.deleteGrade(gradeId);
  }
  return (
    <tr >
      <td className="align-middle">{ grade.name }</td>
      <td className="align-middle">{ grade.course}</td>
      <td className="align-middle">{ grade.grade}</td>
      <td><button type="button" className="btn btn-danger" onClick={ handleClickDeleteGrade }>Delete</button></td>
    </tr>
  );
}
