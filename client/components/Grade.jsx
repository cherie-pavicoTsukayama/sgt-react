import React from 'react';

export default function Grade(props) {
  return (
    props.grades.map(grade => {
      return (
        <tr key={grade.id}>
          <td>{ grade.name }</td>
          <td>{ grade.course}</td>
          <td>{ grade.grade}</td>
        </tr>
      );
    })
  );
}
