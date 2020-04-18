import React from 'react';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      noGrades: 'hidden'
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
        if (grades.length === 0) {
          this.setState({ noGrades: null });
        } else {
          this.setState({ noGrades: 'hidden' });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container mt-4 mb-4'>
        <header>
          <h1>Student Grade Table</h1>
        </header>
        <main>
          <GradeTable grades={ this.state.grades }/>
          <div>
            <p className={ this.state.noGrades }>No grades recorded</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
