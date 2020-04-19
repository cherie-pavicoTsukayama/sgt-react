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
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  addGrade(newGrade) {
    const postGrade = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };

    fetch('/api/grades', postGrade)
      .then(res => res.json())
      .then(grade => {
        const newGrades = this.state.grades.concat(grade);
        this.setState({ grades: newGrades });
      })
      .catch(err => console.error(err));

  }

  deleteGrade(gradeId) {
    const deleteGrade = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`/api/grades/${gradeId}`, deleteGrade)
      .then(() => {
        this.setState(state => {
          const newGrades = state.grades.filter(grade => (grade.id !== gradeId));
          return { grades: newGrades };
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAllGrades();
  }

  render() {
    return (
      <div className='container mt-4 mb-4'>
        <Header average={ this.getAverageGrade() } />
        <main>
          <div className='d-flex'>
            <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade}/>
            <GradeForm onSubmit={this.addGrade} />
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
