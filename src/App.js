import Greeter from './components/Greeter';
import Counter from './components/Counter.jsx';
import Lists from './components/Lists.jsx';
import './App.css';

function App(props) {
  return (
    <>
      <h1>React Try {props.message}</h1>
      
      <Greeter name={'whatsitoya'}></Greeter> 

      <Greeter name={'wadup'}></Greeter>

      <Counter></Counter>

      <Lists></Lists>
      
    </>
  );
}

export default App;
