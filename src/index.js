import ReactDOM from 'react-dom';
import Body from './Body';
import Navbar from './Navbar';

function App(){
    return (
        <div>
            <Navbar/>
            <Body/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("body"));