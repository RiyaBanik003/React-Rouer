import useCustomHooks from './useCustomHooks.js'
import inputBox from './inputBox.jsx';
function App() {
  const [count, increment, decrement]= useCustomHooks()
  return (
    <div className="App">
      hello {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <inputBox/>
    </div>
  );
}

export default App;
