import React from 'react';
import GradeTable from './GradeTable';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      noGrades: 'd-none'
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
          this.setState({ noGrades: 'd-none' });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container mt-4 mb-4'>
        <Header />
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
