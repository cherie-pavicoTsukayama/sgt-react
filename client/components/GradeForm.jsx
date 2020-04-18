import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  render() {
    return (
      <form className="ml-4">
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-user mr-3'></i>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-user mr-3'></i>
          <input type="text" placeholder="Course" name="course" />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-user mr-3'></i>
          <input type="text" placeholder="Grade" name="grade" />
        </div>
        <div className="d-flex flex-nowrap justify-content-end">
          <button>Add</button>
          <button className="ml-3">Cancel</button>
        </div>
      </form>
    );
  }
}
