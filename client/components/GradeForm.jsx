import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeCourse = this.handleChangeName.bind(this);
    // this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'course') {
      this.setState({ course: event.target.value });
    }
    if (event.target.name === 'grade') {
      this.setState({ grade: event.target.value });
    }
  }

  handle

  render() {
    return (
      <form className="ml-2 form-group">
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-user col'></i>
          <input type="text" placeholder="Name" name="name" onChange={ this.handleChange } />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-book col'></i>
          <input type="text" placeholder="Course" name="course" onChange={this.handleChange} />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-graduation-cap col'></i>
          <input type="text" placeholder="Grade" name="grade" onChange={this.handleChange} />
        </div>
        <div className="d-flex flex-nowrap justify-content-end">
          <button>Add</button>
          <button className="ml-3">Cancel</button>
        </div>
      </form>
    );
  }
}
