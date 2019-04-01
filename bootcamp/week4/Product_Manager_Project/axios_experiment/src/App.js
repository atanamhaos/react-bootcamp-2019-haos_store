    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
    import axios from 'axios'


    const MainMenu = () => {
      return (
        <div>
          <Link to="/info"><button>info</button></Link>
        </div>
      );
    };


    const TestButton = () => {
      function testAPIcallToSelf() {
        console.log('hello');
        axios.get(`https://react-bootcamp-2019-haos-store-r4-benjaminhaos.c9users.io/info`,{headers: {
        'Content-Type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    }},
        )
          .then(function(response) {
            // handle success
            console.log('error');
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            console.log('error');
            console.log(axios);
            
            console.log(error);
          })
          .then(function() {
            // always executed
          });
        /*
        axios.get('https://api.github.com/users/koreahaos/repos?per_page=100')
        .then((response) => {
          console.log(response);
        });
        .catch(function(error) {
          console.log(error);
          // handle error
        });
      })
        */


      }
      return (
        <div>
          <button onClick={testAPIcallToSelf} >info</button>
        </div>
      );
    };

    const info = () => (
      <div>
        Info
      </div>
    )

    class App extends Component {


      render() {
        //console.log(window.location.pathname);
        
        if (window.location.pathname === `/info`) {
          let objectForReturn = { test: 'object test' };
          console.log('yes');
          console.log('testing');

          //console.log(JSON.stringify(objectForReturn));
          //return (`${JSON.stringify(objectForReturn)}`);
          return (`{'test':'object'}`);
        }
        return (
          <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <MainMenu />
                <TestButton />
              </header>
              <div>
                <Route exact path="/info" component={info} />
              </div>
            </div>
          </Router>
        );
      }
    }

    export default App;
    