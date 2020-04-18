import React from 'react';

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
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th className="col-2">Student Name</th>
                <th className="col">Course</th>
                <th className="col-3">Grade</th>
              </tr>
            </thead>
          </table>
          <div>
            <p className={ this.state.noGrades }>No grades recorded</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
