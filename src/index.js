// Import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
// Create a component
const App = () => {
    const buttonText = 'Click me!';
    const labelText = 'Enter name :';
    return (
    <div>
        <label htmlFor="name" className="label">{labelText}</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText}</button>
    </div>);
}

// Render
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)