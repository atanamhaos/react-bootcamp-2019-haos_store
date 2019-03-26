import React from 'react';

const  simpleStyle={
    fontWeight:'bold'
}
const span='\'<span>Plot : </span>\'';

console.log(span);

const MovieDataDisplay = (props) => {
    console.log(props.data);
   
    return (
      <div id="movie_data_display">
      {Object.keys(props.data).length === 0 ? '' : (
      <div>
      <h2> : {props.data.Title} : </h2>
      <h3>Year : {props.data.Year}</h3>
      <h3>Director : {props.data.Director}</h3>
      <p><span style={simpleStyle}>Plot : </span>{props.data.Plot}</p>
      </div>
      )}
      </div>
      );
};

export default MovieDataDisplay;
