import React from 'react';
import GradeTable from './GradeTable';
import Header from './Header';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      noGrades: 'd-none'
    };
  }

  getAverageGrade() {
    const students = this.state.grades;
    const numOfStudents = this.state.grades.length;
    let gradeTotal = 0;
    for (let i = 0; i < numOfStudents; i++) {
      gradeTotal += students[i].grade;
    }
    const gradeAverage = Math.round(gradeTotal / numOfStudents);
    return gradeAverage;
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
        if (grades.length === 0) {
          this.setState({ noGrades: null });
        } else {
          this.setState({ noGrades: 'd-none' });
        }
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAllGrades();
  }

  componentDidUpdate() {
    // console.log(this.state.average)
  }

  render() {
    return (
      <div className='container mt-4 mb-4'>
        <Header average={ this.getAverageGrade() } />
        <main>
          <div className='d-flex'>
            <GradeTable grades={this.state.grades} />
            <GradeForm />
          </div>
          <div>
            <p className={ this.state.noGrades }>No grades recorded</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
