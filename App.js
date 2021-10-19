import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;

const Counter = () => {
    const [count, setCount] = useState(0);
    const [LastClickDate, setLastClickDate] = useState(new Date());
  }
  const onClick = () => {
    setCount(count + 1);
    setLastClickDate(new Date());
  };

  return (
    <>
    <h1>Cantidad de productos: {count} </h1>
    <button onClick={onClick}> + </button>
    <button onClick={ () => setCount(count - 1)}> - </button>
    </>
  )

  export default function App () {
    return(
      <>
      <Counter/>
      </>
    );
  }
