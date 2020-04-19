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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('button clicked');
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
    document.getElementById('gradeForm').reset();
  }

  render() {
    return (
      <form id='gradeForm' className="ml-2 form-group" onSubmit={ this.handleSubmit }>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-user col'></i>
          <input type="text" placeholder="Name" name="name" onChange={ this.handleChange } />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-book col'></i>
          <input type="text" placeholder="Course" name="course" onChange={ this.handleChange } />
        </div>
        <div className="d-flex flex-nowrap align-items-center mb-3">
          <i className='fas fa-graduation-cap col'></i>
          <input type="text" placeholder="Grade" name="grade" onChange={ this.handleChange } />
        </div>
        <div className="d-flex flex-nowrap justify-content-end">
          <button type='submit'>Add</button>
          <button className="ml-3">Cancel</button>
        </div>
      </form>
    );
  }
}
