import logo from './logo.svg';
import './App.css';
import Counter from './Counter'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
      <a className= "app-link"
      href = "/auth/google">Sign in with Google</a>
      
    </div>
  );
}

export default App;
