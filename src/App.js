import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import App3 from './App3';
import Child2Parent from './Child2Parent';

function App() {
  const greet = "Hola"
  const language = "Spanish"
  }

  const howdy = (data)=>{
    console.log(data);

  return (
    <div className='MainPage'>
<p>How to say hi</p>
      <App2 child2 = {language}/>
      <App3 child3 = {greet}/>
      <Child2Parent  Child2ParentName= {howdy}/>
    </div>

  );
}

export default App;
