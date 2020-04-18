import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.super = {
      grades: []
    };

  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('mounted');
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
                <th className="col-6">Student Name</th>
                <th className="col-3">Course</th>
                <th className="col-3">Grade</th>
              </tr>
            </thead>
          </table>
          <div>
            <p className="hidden">No grades recorded</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
