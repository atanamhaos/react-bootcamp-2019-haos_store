import React from 'react';
import axios from 'axios';
import MovieSearch from './movie_search.js';
import MovieDataDisplay from './movie_data_display.js';

class MovieApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    parent_function = (search_query) => {
        console.log(search_query);
        // Make a request for the movie info
        
        
        axios.get(`https://www.omdbapi.com/?t='${search_query}'&apikey=1075f858`)
        //axios.get(`https://www.omdbapi.com/?t='blade runner'&apikey=1075f858`)
            .then((response) => {
                this.setState({ data: response.data });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    }

    render() {
        return (
            <div id="App">
              <h1>Movie Data</h1>
              <MovieSearch parent_function={this.parent_function}/>
              <MovieDataDisplay data={this.state.data}/>
            </div>
        );
    }
}

export default MovieApp;
