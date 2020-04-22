import React from 'react';
import img from './static/1.jpg'

class App extends React.Component {
    render() {
        return (<div>
        <h1>Hello React & Webpack!</h1>
            <img src={img}/>
        <ul>
        {
            ['a', 'b', 'c',"d","e"].map(name => <li>{`I'm ${name}!`}</li> )
    }
    </ul>
        </div>)
    }
}

export default App;
