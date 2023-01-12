import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import MutableContent from './pages/mutableContent';
//import io from 'socket.io-client'
//const socket= io('http://localhost:8010')

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
       <MutableContent />
    
  );
}

export default App;
