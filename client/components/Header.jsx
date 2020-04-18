import React from 'react';

export default function Header(props) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
      <h1>Student Grade Table</h1>
      <div className="d-flex">
        <h4>Average Grade <span className="badge badge-secondary">{ props.average } </span></h4>
      </div>
    </div>

  );
}
