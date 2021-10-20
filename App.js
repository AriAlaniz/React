import 'imag/logo.jpeg'
import './App.css';
import { useState } from 'react'
import 'src/index.css'
import 'imag/autocebante.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo.jpeg} className="App-logo" alt="logo" />
        <h1>
          Tienda de regalos
        </h1>
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

const productos = [
  { 
    id: "mate", price: "400", name:"mate"
  },
  {
    id:"autocebante", price:"800", name:"autocebante"
  },
];

const task = new Promise ((resolve,
  reject) => {
    setTimeout(()=> { 
      resolve (productos);
      }, 3000);
  });

  task
  .then(
    (result) => {
      
    }
  )
export default function App (){
  const [data, setData] = useState([]);
  
  const getData = (data) => 
  new Promise((resolve, reject) =>[
    if (data) {
    resolve (data);
  }else {
    reject("No se encontro nada")
  }
});
