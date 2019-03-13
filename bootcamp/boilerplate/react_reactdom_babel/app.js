/* Used for simple verification things are working */
console.log('app.js loaded');
typeof React !== 'undefined' ? console.log('React library loaded!') : console.log('React library has not loaded :(')
typeof ReactDOM !== 'undefined' ? console.log('ReactDOM library loaded!') : console.log('React library has not loaded :(')

const app = React.createElement('h1', null, 'Vote');
ReactDOM.render(app, document.getElementById('vanillaReactApp'));

ReactDOM.render(
    <h1>Hello!</h1>,
document.getElementById('babelApp')
);

/*
    */