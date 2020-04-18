import React from 'react';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGrades: [],
      noGrades: 'hidden'
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('mounted');
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        if (grades.length === 0) {
          this.setState({
            noGrades: null
          });
        } else {
          this.setState({
            noGrades: 'hidden'
          });
        }
        this.setState({ allGrades: grades });
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
          <GradeTable props={ this.state.allGrades }/>
          <div>
            <p className={ this.state.noGrades }>No grades recorded</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
