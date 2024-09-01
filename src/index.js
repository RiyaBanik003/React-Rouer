import ReactDOM from "react-dom/client";
import App from "./App";

export default function index() {
  return (
    <h1 className='bg-black'>hello
      <App />
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);